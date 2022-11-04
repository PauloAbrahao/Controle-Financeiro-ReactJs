import React from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import GlobalStyle from "./styles/global";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase";
import Login from "./components/login/Login";

function App() {
  const [user] = useAuthState(auth);

  const [transactionsList, setTransactionsList] = React.useState();
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    db.collection("transactions")
      .orderBy("transDate", "desc")
      .onSnapshot((snapshot) => {
        setTransactionsList(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  React.useEffect(() => {
    const amountExpense = transactionsList
      ?.filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      ?.filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense
      ?.reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
    const income = amountIncome?.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`R$ ${Number(income) < Number(expense) ? "-" : ""}${total}`);
  }, [transactionsList]);

  const handleAdd = async (transaction) => {
    await db.collection("transactions").add(transaction);
  };

  return (
    <>
      {user ? (
        <>
          <Header />
          <Resume income={income} expense={expense} total={total} />
          <Form
            handleAdd={handleAdd}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
          <GlobalStyle />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;

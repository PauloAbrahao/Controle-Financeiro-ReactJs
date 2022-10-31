import React from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import GlobalStyle from "./styles/global";

function App() {

  const data = localStorage.getItem("transactions")

  const [transactionsList, setTransactionsList] = React.useState(data ? JSON.parse(data) : []);

  const [income, setIncome] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))
    
    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))
    
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`R$ ${Number(income) < Number(expense) ? '-' : ''}${total}`)

  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }

  return (
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
  );
}

export default App;
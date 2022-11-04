import React from "react";
import Grid from "../grid/Grid";
import * as styled from "./styles";

import firebase from 'firebase/compat/app'
const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isExpense, setExpense] = React.useState(false);
  const [transDate, setTransDate] = React.useState();

  const generateId = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor deve ser positivo!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      transDate: transDate
    }

    handleAdd(transaction)

    setDesc("")
    setAmount("")
  };

  return (
    <>
      <styled.Container>
        <styled.InputContent>
          <styled.Label>Descrição</styled.Label>
          <styled.Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </styled.InputContent>

        <styled.InputContent>
          <styled.Label>Valor</styled.Label>
          <styled.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </styled.InputContent>

        <styled.InputContent>
          <styled.Label>Data</styled.Label>
          <styled.Input
            value={transDate}
            type="date"
            onChange={(e) => setTransDate(e.target.value)}
          />
        </styled.InputContent>

        <styled.RadioGroup>
          <styled.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />

          <styled.Label htmlFor="rIncome">Entrada</styled.Label>

          <styled.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />

          <styled.Label htmlFor="rExpenses">Saída</styled.Label>
        </styled.RadioGroup>

        <styled.Button onClick={handleSave}>Adicionar</styled.Button>

      </styled.Container>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;

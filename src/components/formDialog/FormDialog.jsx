import React from "react";

import * as styled from "./styles.js";

import { deleteDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

import { RiCloseLine } from "react-icons/ri";

const FormDialog = (props) => {

  const [editValues, setEditValues] = React.useState({
    desc: props.desc,
    amount: props.amount,
    transDate: props.transDate,
    income: props.income,
    expense: props.expense,
  })

  const onDelete = async (ID) => {
    const colRef = collection(db, "transactions");
    const docsSnap = await getDocs(colRef);

    docsSnap.forEach((doc) => {
      if (doc.data().id === ID) {
        console.log(doc.ref);
        deleteDoc(doc.ref);
      }
    });

    props.setOpen(false)
  };

  const onEdit = async (ID) => {
    const colRef = collection(db, "transactions");
    const docsSnap = await getDocs(colRef);

    docsSnap.forEach((doc) => {
      if (doc.data().id === ID) {

        updateDoc(doc.ref, {
          desc: editValues.desc ? editValues.desc : null,
          amount: editValues.amount ? editValues.amount : null,
          transDate: editValues.transDate ? editValues.transDate : null,
          income: editValues.income ? editValues.income : false,
          expense: editValues.expense ? editValues.expense : false,
        });
      }
    })

    props.setOpen(false)
  }

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));

    console.log(values.target.value);

    //change the radion button state when the user change the value
    if (values.target.id === "income") { 
      setEditValues((prevValues) => ({
        ...prevValues,
        income: true,
        expense: false,
      }));
    } else if (values.target.id === "expense") { 
      setEditValues((prevValues) => ({
        ...prevValues,
        income: false,
        expense: true,
      }));
    } 
  }

  return (
    <>
      <styled.Background  onClick={() => props.setOpen(false)} />
      <styled.Centered>
        <styled.Modal>
          <styled.ModalHeader>
            <styled.Heading> Editar </styled.Heading>
          </styled.ModalHeader>

          <styled.ModalContent>
            <styled.ChangeValues>
              <styled.Label htmlFor="desc">Descrição</styled.Label>
              <styled.Input
                margin="dense"
                id="desc"
                label="desc"
                defaultValue={props.desc}
                type="text"
                onChange={handleChangeValues}
              />
            </styled.ChangeValues>

            <styled.ChangeValues>
              <styled.Label htmlFor="amount">Valor</styled.Label>
              <styled.Input
                margin="dense"
                id="amount"
                label="amount"
                defaultValue={props.amount}
                onChange={handleChangeValues}
                type="number"
              />
            </styled.ChangeValues>

            <styled.ChangeValues>
              <styled.Label htmlFor="transDate">Data</styled.Label>
              <styled.Input
                margin="dense"
                id="transDate"
                label="transDate"
                defaultValue={props.transDate}
                onChange={handleChangeValues}
                type="date"
              />
            </styled.ChangeValues>

            <styled.RadioButtons>
              <styled.Label htmlFor="income">Entrada</styled.Label>
              <styled.Input
                type="radio"
                id="income"
                name="group1"
                style={{width:"1rem"}}
                defaultChecked={props.expense ? false : true}
                onChange={handleChangeValues} 
              />
            </styled.RadioButtons>

            <styled.RadioButtons>
              <styled.Label htmlFor="expense">Saída</styled.Label>
              <styled.Input
                type="radio"
                id="expense"
                name="group1"
                style={{width:"1rem"}}
                defaultChecked={props.expense ? true : false}
                onChange={handleChangeValues}
              />
            </styled.RadioButtons>
          </styled.ModalContent>

          <styled.CloseBtn
            onClick={() => props.setOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </styled.CloseBtn>

          <styled.ModalActions>
            <styled.ActionsContainer>
              <styled.AdicionarBtn
                onClick={() => onEdit(props.id)}
              >
                Salvar
              </styled.AdicionarBtn>

              <styled.DeletarBtn
                onClick={() => onDelete(props.id)}
              >
                Deletar
              </styled.DeletarBtn>
            </styled.ActionsContainer>
          </styled.ModalActions>
        </styled.Modal>
      </styled.Centered>
    </>
  );
};

export default FormDialog;

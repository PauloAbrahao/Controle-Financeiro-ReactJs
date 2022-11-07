import React from "react";

import * as styled from "./styles.js";

import { RiCloseLine } from "react-icons/ri";

const FormDialog = (props) => {
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
              <styled.Label htmlFor="name">Descrição</styled.Label>
              <styled.Input
                margin="dense"
                id="name"
                label="name"
                defaultValue={props.desc}
                type="text"
              />
            </styled.ChangeValues>

            <styled.ChangeValues>
              <styled.Label htmlFor="valor">Valor</styled.Label>
              <styled.Input
                margin="dense"
                id="valor"
                label="valor"
                defaultValue={props.amount}
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
                type="date"
              />
            </styled.ChangeValues>

            <styled.RadioButtons>
              <styled.Label htmlFor="rIncome">Entrada</styled.Label>
              <styled.Input
                type="radio"
                id="rIncome"
                name="group1"
                checked={props.expense ? false : true}
                onChange={() => props.setIncome(!props.isExpense)}
              />
            </styled.RadioButtons>

            <styled.RadioButtons>
              <styled.Label htmlFor="rExpenses">Saída</styled.Label>
              <styled.Input
                type="radio"
                id="rExpenses"
                name="group1"
                checked={props.expense ? true : false}
                onChange={() => props.setExpense(!props.isExpense)}
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
                onClick={() => props.setOpen(false)}
              >
                Adicionar
              </styled.AdicionarBtn>
              <styled.DeletarBtn
                onClick={() => props.setOpen(false)}
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

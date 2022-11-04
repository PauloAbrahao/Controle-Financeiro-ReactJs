import React from "react";

const FormModal = (props) => {
  const [prevValues, setPrevValues] = React.useState({
    id: props.id,
    desc: props.desc,
    amount: props.amount,
    income: props.income,
    expense: props.expense,
  });

  const handleChangeValues = (values) => {
    setPrevValues((values) => ({
      ...prevValues,
      [values.target.id]: values.target.value
    }))
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEdit = () => {

  }

  return (
    <div>
      <div
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div id="form-dialog-title">Editar</div>
        <div>
          <p
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <input
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <p
            autoFocus
            margin="dense"
            id="cost"
            label="CPF"
            defaultValue={props.cpf}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <input
            autoFocus
            margin="dense"
            id="category"
            label="Idade"
            defaultValue={props.idade}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </div>
        <div>
          <button
            onClick={handleClose}
            color="primary">
            Cancel
          </button>

          <button color="primary" onClick={() => handleEdit()}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;

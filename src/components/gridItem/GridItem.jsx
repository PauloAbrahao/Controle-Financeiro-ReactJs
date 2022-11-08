import React from "react";
import * as styled from "./styles";
import FormDialog from "../formDialog/FormDialog";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaEdit,
} from "react-icons/fa";

const GridItem = ({item}) => {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open && <FormDialog
        open={open}
        setOpen={setOpen}
        id={item.id}
        desc={item.desc}
        amount={item.amount}
        transDate={item.transDate}
        income={item.income}
        setIncome={item.setIncome}
        expense={item.expense}
        setExpense={item.setExpense}
      />}

      <styled.Tr>
        <styled.Td>
          <div
            style={{
              backgroundColor: item.expense ? "#DC0000" : "#2CAE1E",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "#F7F7F7",
              width: "130px",
              fontWeight: "400",
              cursor: "pointer",
            }}

            onClick={() => setOpen(true)}
          >
            {item.desc}
          </div>
        </styled.Td>

        <styled.Td>
          <div
            style={{
              backgroundColor: "#F7F7F7",
              color: item.expense ? "#DC0000" : "#2CAE1E",
              borderRadius: "5px",
              padding: "10px 15px",
              fontWeight: "bold",
              width: "100px",
            }}
          >
            {item.amount && item.expense
              ? `- ${item.amount}`
              : `+ ${item.amount}`}
          </div>
        </styled.Td>

        <styled.Td>
          <div>{item.transDate?.split("-").reverse().join("/")}</div>
        </styled.Td>

        <styled.Td alignCenter>
          {item.expense ? (
            <styled.Type>
              <FaRegArrowAltCircleDown color="red" />
              <styled.p>Gasto</styled.p>
            </styled.Type>
          ) : (
            <styled.Type>
              <FaRegArrowAltCircleUp color="green" />
              <styled.p>Ganho</styled.p>
            </styled.Type>
          )}
        </styled.Td>

        <styled.Td alignCenter>
          <FaEdit
            color="#6F6AF8"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </styled.Td>
      </styled.Tr>
    </>
  );
};

export default GridItem;

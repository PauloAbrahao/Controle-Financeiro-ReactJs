import React from "react";
import * as styled from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const GridItem = ({ item, onDelete, onEdit }) => {

  return (
    <styled.Tr>
      <styled.Td >
        <div style={{ backgroundColor: item.expense ? "#DC0000" : "#2CAE1E", borderRadius: '5px', padding: "10px 15px", color: "#F7F7F7", width: "120px" }}>
          {item.desc}
        </div>
      </styled.Td>

      <styled.Td >
        <div style={{ backgroundColor: "#F7F7F7",color: item.expense ? "#DC0000" : "#2CAE1E", borderRadius: '5px', padding: "10px 15px", fontWeight: 'bold', width: "100px" }}> 
          {item.amount && item.expense ? `- ${item.amount}` : `+ ${item.amount}`}
        </div>
      </styled.Td>
    
      <styled.Td >
        <div> 
          {item.transDate?.split('-').reverse().join('/')}
        </div>
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
        <FaTrash
          color="red"
          onClick={() => onDelete(item.id)}
          style={{ cursor: "pointer" }}
        />
        <FaEdit
          color="teal"
          onClick={() => onEdit(item.id)}
          style={{ cursor: "pointer", marginLeft: "2rem" }}
        />
      </styled.Td>
    </styled.Tr>
  );
};

export default GridItem;

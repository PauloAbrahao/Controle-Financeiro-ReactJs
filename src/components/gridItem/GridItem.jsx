import React from "react";
import * as styled from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <styled.Tr>
      <styled.Td>{item.desc}</styled.Td>
      <styled.Td>{item.amount}</styled.Td>
      <styled.Td alignCenter>
        {item.expense ? (
          <styled.Type>
            <FaRegArrowAltCircleDown color="red" />
            <styled.p>Saída</styled.p>
          </styled.Type>
        ) : (
          <styled.Type>
            <FaRegArrowAltCircleUp color="green" />
            <styled.p>Entrada</styled.p>
          </styled.Type>
        )}
      </styled.Td>

      <styled.Td alignCenter>
        <FaTrash color="red" onClick={() => onDelete(item.id)} />
      </styled.Td>
    </styled.Tr>
  );
};

export default GridItem;

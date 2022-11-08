import React from "react";
import GridItem from "../gridItem/GridItem";
import * as styled from "./styles";

const Grid = ({ itens }) => {

  return (
    <>
      <styled.Table>
        <styled.Thead>
          <styled.Tr>
            <styled.Th width={30}>Descrição</styled.Th>
            <styled.Th width={20}>Valor</styled.Th>
            <styled.Th width={20}>Data</styled.Th>
            <styled.Th width={20}>
              Tipo
            </styled.Th>
            <styled.Th width={10}>Ações</styled.Th>
          </styled.Tr>
        </styled.Thead>

        <styled.Tbody>
          {itens?.map((item, index) => (
            <GridItem
              key={index}
              item={item}
            />
          ))}
        </styled.Tbody>
      </styled.Table>
    </>
  );
};

export default Grid;

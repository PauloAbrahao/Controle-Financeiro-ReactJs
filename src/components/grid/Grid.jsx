import React from "react";
import GridItem from "../gridItem/GridItem";
import * as styled from "./styles";
import { deleteDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const Grid = ({ itens }) => {

  const onDelete = async (ID) => {
    const colRef = collection(db, "transactions");
    const docsSnap = await getDocs(colRef);

    docsSnap.forEach((doc) => {
      console.log(ID, "=>", doc.data().id);
      if (doc.data().id === ID) {
        console.log(doc.ref);
        deleteDoc(doc.ref);
      }
    });
  };

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
              onDelete={onDelete}
            />
          ))}
        </styled.Tbody>
      </styled.Table>
    </>
  );
};

export default Grid;

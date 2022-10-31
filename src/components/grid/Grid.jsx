import React from 'react'
import GridItem from '../gridItem/GridItem'
import * as styled from './styles'

const Grid = ({ itens, setItens }) => {
  
  const onDelete = (ID) => { 
    const newArray = itens.filter((transaction) => transaction.id !== ID)

    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))  
  }

  return (
    <>
      <styled.Table>
        <styled.Thead>
          <styled.Tr>
            <styled.Th width={40}>Descrição</styled.Th>
            <styled.Th width={40}>Valor</styled.Th>
            <styled.Th width={10} alignCenter>Tipo</styled.Th>
            <styled.Th width={10}></styled.Th>
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
  )
}

export default Grid
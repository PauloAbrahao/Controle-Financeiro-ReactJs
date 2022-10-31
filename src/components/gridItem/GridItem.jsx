import React from 'react'
import * as styled from './styles'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'

const GridItem = ({item, onDelete}) => {
  return (
    <styled.Tr>
      <styled.Td>{item.desc}</styled.Td>
      <styled.Td>{item.amount}</styled.Td>
      <styled.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </styled.Td>

      <styled.Td alignCenter>
        <FaTrash color="red" onClick={() => onDelete(item.id)} />
      </styled.Td>

    </styled.Tr>
  )
}

export default GridItem
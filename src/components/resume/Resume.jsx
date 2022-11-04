import React from 'react'
import ResumeItem from '../resumeItem/ResumeItem'
import * as Styled from './styles'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

const Resume = ({income, expense, total}) => {
  return (
    <Styled.Container>
      <ResumeItem title="Receita" Icon={FaRegArrowAltCircleUp} value={ income } />
      <ResumeItem title="Despesa" Icon={FaRegArrowAltCircleDown} value={ expense } />
      <ResumeItem title="Total" Icon={FaDollarSign} value={ total } />
    </Styled.Container>
  )
}

export default Resume
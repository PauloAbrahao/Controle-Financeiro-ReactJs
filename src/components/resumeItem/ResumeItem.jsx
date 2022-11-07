import React from 'react'
import * as styled from './styles'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <styled.Container>
      <styled.Header>
        <styled.HeaderTitle style={{color: title == "Receita" ? "green" : title == "Despesa" ? "red" : "#6f6af8"}}>
          {title}
        </styled.HeaderTitle>
        <Icon style={{color: title == "Receita" ? "green" : title == "Despesa" ? "red" : "#6f6af8"}} />
      </styled.Header>
      <styled.Total>{value}</styled.Total>
    </styled.Container>
  )
}

export default ResumeItem
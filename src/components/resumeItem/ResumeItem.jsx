import React from 'react'
import * as styled from './styles'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <styled.Container>
      <styled.Header>
        <styled.HeaderTitle>
          {title}
        </styled.HeaderTitle>
        <Icon />
      </styled.Header>
      <styled.Total>{value}</styled.Total>
    </styled.Container>
  )
}

export default ResumeItem
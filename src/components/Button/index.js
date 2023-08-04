import React from 'react'
import { ButtonContainer } from './styles'

function Button({event}) {
  return (
    <ButtonContainer onClick={event}>
      Search
    </ButtonContainer>
  )
}

export default Button
import React from 'react'
import { ButtonContainer } from './styles'

function Button({onClick, value}) {
  return (
    <ButtonContainer onClick={onClick}>
      {value}
    </ButtonContainer>
  )
}

export default Button
import React from 'react'
import { ButtonContainer } from './styles'

function Button({onClick, value, onTouchStart, title}) {
  return (
    <ButtonContainer onClick={onClick} onTouchStart={onTouchStart} title={title}>
      {value}
    </ButtonContainer>
  )
}

export default Button
import React from 'react'
import { IContainer } from './styles'

function Input({value, onChange}) {
  return (
    <IContainer value={value} onChange={onChange} />
  )
}

export default Input
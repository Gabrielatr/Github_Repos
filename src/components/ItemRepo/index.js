import React from 'react'
import { ItemContainer } from './styles'


function ItemRepo({repo, onClick}) {

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p> <br />
        <a href={repo.html_url} target='_blank' rel="noreferrer" className='repo'>Ver repositório</a> <br />
        <a href='#' className='remove' onClick={onClick}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo
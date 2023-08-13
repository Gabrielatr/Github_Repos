import React from 'react'
import { ItemContainer } from './styles'


function ItemRepo({repo, onClick}) {

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p className='User'>{repo.full_name}</p> <br />
        <a href={repo.html_url} target='_blank' rel="noreferrer" className='repo'>Link</a> <br />
        <span className='remove' onClick={onClick}>Remove</span>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo
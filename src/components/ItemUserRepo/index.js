import React from 'react'
import { ItemContainer } from './styles'


function ItemUserRepo({repo, onClick}) {

  return (
    <ItemContainer>
        <h4>{repo.name}</h4>
        <p className='User'>{repo.full_name}</p> <br />
        <a href={repo.html_url} target='_blank' rel="noreferrer" className='repo'>Link</a> <br />
        <span className='add' onClick={onClick}>Add to the main list</span>
        <hr />
    </ItemContainer>
  )
}

export default ItemUserRepo
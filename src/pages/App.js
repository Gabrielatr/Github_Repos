import gitlogo from '../assets/github.png'
import { Container, BtnContainer, ListContainer, SearchContainer } from './styles.js';
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';
import ItemUserRepo from '../components/ItemUserRepo';
import { useState } from 'react';
import { api } from '../services/api.js';
import Swal from 'sweetalert2';


/*

Topicos para pesquisar e filtrar repositórios (linguagem, simple, advanced)

*/


function App() {

  const [currentSearch, setCurrentSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [list, setList] = useState([]);


  const handleSearchRepo = async () => {
    try{
      const {data} = await api.get(`repos/${currentSearch}`);

      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if(isExist){ throw (new Error()); }

        setRepos(prev => [...prev, data]);
        setCurrentSearch('');
        return
      }
    }catch(e){
      e.name === "AxiosError" ? new Swal("Repositório não encontrado") : new Swal("O repositório já se encontra listado");
    }
    
  }

  const handleSearchReposFromUser = async () => {
    try{
      const {data} = await api.get(`/users/${currentSearch}/repos`);

      if(data[0].id){
        console.log("entrei");
        setUserRepos(data);
        setList(data);
        setCurrentSearch('');
        return
      }
    }catch(e){
      new Swal("User not found :(");
    }
  }

  const handleLanguage = (event) => {
    if(event.target.value !== ""){
      const newUserRepos = userRepos.filter(repo => repo.language === event.target.value);
      setList(newUserRepos);
    }else{
      setList(userRepos);
    }
  }

  const handleOrder = (event) => {
    if(event.target.value !== ""){
      if(event.target.value === "Descending"){
        console.log("desc");
        setList(list.sort(function(a,b){
          return new Date(b.created_at) - new Date(a.created_at);
        }));
      }else{
        setList(list.sort(function(a,b){
          return new Date(a.created_at) - new Date(b.created_at);
        }));
      }
    }else{
      setList(userRepos);
    }
  }

  const handleAddRepo = (repo) => {
    setRepos(prev => [...prev, repo]);
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos)
  }
  

  return (
    
    <Container>

      <SearchContainer className='search'>
        <img src={gitlogo} width={72} height={72} alt='github logo'/><br />
        <Input value={currentSearch} onChange={(e) => setCurrentSearch(e.target.value)} />

        <BtnContainer>
          <Button onClick={handleSearchRepo} value="Search" />
          <Button value="Search your repos" onClick={handleSearchReposFromUser}/>
        </BtnContainer>
        
        {repos.map(repo => <ItemRepo key={repo.id} repo={repo} onClick={() => handleRemoveRepo(repo.id)} />)}
      </SearchContainer>

      <ListContainer className='searchList'>
        <ul>
          <li>
            <label>Language: </label>
            <select onChange={handleLanguage}>
              <option></option>
              <option>JavaScript</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>Java</option>
              <option>C#</option>
              <option>C</option>
            </select>
          </li>
          <li>
            <label>Order: </label>
            <select onChange={handleOrder}>
              <option></option>
              <option>Descending</option>
              <option>Ascending</option>
            </select>
          </li>
        </ul>
        <br />
        {list.map(repo => <ItemUserRepo key={repo.id} repo={repo} onClick={() => handleAddRepo(repo)} />)}
        
      </ListContainer>
    </Container>
    
  );
}

export default App;

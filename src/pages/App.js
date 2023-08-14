import gitlogo from '../assets/github.png'
import { Container, BtnContainer, ListContainer, SearchContainer } from './styles.js';
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';
import ItemUserRepo from '../components/ItemUserRepo';
import { useState } from 'react';
import { api } from '../services/api.js';
import Swal from 'sweetalert2';

function App() {

  const [currentSearch, setCurrentSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [list, setList] = useState([]);
  const [fullScreen, setFullScreen] = useState(true);


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
      e.name === "AxiosError" ? new Swal("Repository not found.") : new Swal("The repository already exists!");
    }
    
  }

  const handleSearchReposFromUser = async () => {
    setFullScreen(false);
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
    const value = event.target.value;
    let newList;

    if (value !== "") {
      if (value === "Descending") {
        newList = list.slice().sort((a, b) => b.id - a.id);
      } else {
        newList = list.slice().sort((a, b) => a.id - b.id);
      }
      setList(newList);
    }
  };

  const handleAddRepo = (repo) => {
    if(repo.id){
      const isExist = repos.find(rep => rep.id === repo.id);
      if(isExist){ new Swal("The repository already exists!"); return }

      setRepos(prev => [...prev, repo]);
    }
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos)
  }

  const handleTooltip = (event) => {
    event.tooltip();
  }
  

  return (
    
    <Container>

      <SearchContainer className='search' style={{'width': `${fullScreen ? "100%" : "50%"}`}}>
        <img src={gitlogo} width={72} height={72} alt='github logo'/><br />
        <Input value={currentSearch} onChange={(e) => setCurrentSearch(e.target.value)} />

        <BtnContainer>
          <Button 
            onClick={handleSearchRepo}
            value="Add repo"
            onTouchStart={handleTooltip}
            title="Write [username]/[repo's name] in the input / Insira [username]/[nome do repo] no input" />
          <Button
            value="Search with username"
            onClick={handleSearchReposFromUser}
            onTouchStart={handleTooltip}
            title="Give your username in the input / Insira seu username no input"/>
        </BtnContainer>
        <fieldset style={{
          width: "70%",
          height: "60%",
          padding: "20px",
          overflow: "scroll"
        }}>
          <legend>List of saved repositories</legend>
          {repos.map(repo => <ItemRepo key={repo.id} repo={repo} onClick={() => handleRemoveRepo(repo.id)} />)}
        </fieldset>
      </SearchContainer>

      <ListContainer className='searchList' style={{'display': `${fullScreen ? 'none' : 'inline' }`, 'width': `${fullScreen ? '0' : '50%' }`}}>
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
          <li>
            <label>Total: {list.length} </label>
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <div id='ListRepos'>
          {list.map(repo => <ItemUserRepo key={repo.id} repo={repo} onClick={() => handleAddRepo(repo)} />)}
        </div>

      </ListContainer>
    </Container>
    
  );
}

export default App;

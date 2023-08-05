import gitlogo from '../assets/github.png'
import { Container } from './styles.js';
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';
import { useState } from 'react';
import { api } from '../services/api.js';
import Swal from 'sweetalert2';


/*

Topicos para pesquisar e filtrar repositórios (linguagem, simple, advanced)
Remover repositorio da lista

*/


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try{
      const {data} = await api.get(`repos/${currentRepo}`);

      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if(isExist){ throw (new Error()); }

        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }catch(e){
      e.name === "AxiosError" ? new Swal("Repositório não encontrado") : new Swal("O repositório já se encontra listado");
    }
    
  }

  const handleRemoveRepo = (id) => {
    console.log("Removendo registro:", id)
  }

  return (
    
    <Container>
      <img src={gitlogo} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} />)}
    </Container>
    
  );
}

export default App;

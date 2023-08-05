import gitlogo from '../assets/github.png'
import { Container } from './styles.js';
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';
import { useState } from 'react';
import { api } from '../services/api.js';


/*

Mensagem de alerta
Topicos para pesquisar e filtrar repositórios (linguagem, simple, advanced)
Remover repositorio da lista

*/


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    console.log("Olá");
    const {data} = await api.get(`repos/${currentRepo}`);
    

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      console.log(data);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
    console.log("Repositório não encontrado");
    alert("Repositório não encontrado");
    
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

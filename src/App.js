import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer/Index';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFa',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EEF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    },
  ];

  const [collaborators, setCollaborator] = useState([]);


  const registerColaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} register={collaborator => registerColaborator(collaborator)} />
      {teams.map(
        team =>
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondColor={team.secondColor}
            collaborators = {collaborators.filter(collaborator => collaborator.team === team.name)}
          />
      )}
      <Footer/>
    </div>
  );
}

export default App;

import '../styles/App.css';
import getDataFromAPI from '../services/api';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  // VARIABLES ESTADO

  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  // USEEFFECT
  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);

  // FUNCIONES HANDLER

  const handleFilterByName = (value) => {
    setFilterByName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const charactersFiltered = dataCharacter.filter((character) => {
    return character.name.toLowerCase().includes(filterByName.toLowerCase());
  });

  return (
    <>
      <h1>Rick and Morty</h1>
      <Filters handleFilterByName={handleFilterByName} />
      <CharacterList characters={charactersFiltered}></CharacterList>
    </>
  );
}

export default App;

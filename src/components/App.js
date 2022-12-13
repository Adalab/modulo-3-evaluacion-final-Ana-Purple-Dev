import '../styles/App.css';
import getDataFromAPI from '../services/api';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import ls from '../services/localStorage';

function App() {
  // VARIABLES ESTADO

  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState(ls.get('filterByName', ''));
  const [filterBySpecie, setFilterBySpecie] = useState('All');

  // USEEFFECT
  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);
  // FUNCIONES ROUTER

  const findCharacter = (id) => {
    return dataCharacter.find(
      (oneCharacter) => oneCharacter.id === parseInt(id)
    );
  };
  // FUNCIONES HANDLER

  const handleFilterBySpecie = (value) => {
    setFilterBySpecie(value);
  };

  const handleFilterByName = (value) => {
    ls.set('filterByName', value);
    setFilterByName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const charactersFiltered = dataCharacter
    .filter((character) => {
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    })
    .filter((character) => {
      return filterBySpecie === 'All'
        ? true
        : character.species === filterBySpecie;
    });

  return (
    <>
      <h1>Rick and Morty</h1>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters
                handleFilterByName={handleFilterByName}
                filterByName={filterByName}
                handleFilterBySpecie={handleFilterBySpecie}
              />

              <CharacterList characters={charactersFiltered}></CharacterList>
            </>
          }
        />
        <Route
          path='/character/:characterId'
          element={
            <CharacterDetail findCharacter={findCharacter}></CharacterDetail>
          }
        />
      </Routes>
    </>
  );
}

export default App;

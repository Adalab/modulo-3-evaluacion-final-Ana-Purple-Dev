import '../styles/App.css';
import getDataFromAPI from '../services/api';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes, Route, NavLink } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import ls from '../services/localStorage';

function App() {
  // VARIABLES ESTADO

  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState(ls.get('filterByName', ''));
  const [filterBySpecie, setFilterBySpecie] = useState('All');
  const [filterByGender, setFilterByGender] = useState('All');

  // USEEFFECT
  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
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

  const handleFilterByGender = (value) => {
    setFilterByGender(value);
  };

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
    })
    .filter((character) => {
      return filterByGender === 'All'
        ? true
        : character.gender === filterByGender;
    });

  return (
    <>
      <body className='body'>
        <NavLink to='/'>
          <header className='header'></header>
        </NavLink>

        <main className='main'>
          <NavLink to='/'>
            <img
              className='img_title'
              src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'
              alt='logo de rick & morty'
            />
          </NavLink>

          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Filters
                    handleFilterByName={handleFilterByName}
                    filterByName={filterByName}
                    handleFilterBySpecie={handleFilterBySpecie}
                    handleFilterByGender={handleFilterByGender}
                  />

                  <CharacterList
                    characters={charactersFiltered}
                  ></CharacterList>
                </>
              }
            />
            <Route
              path='/character/:characterId'
              element={
                <CharacterDetail
                  findCharacter={findCharacter}
                ></CharacterDetail>
              }
            />
          </Routes>
        </main>
      </body>
    </>
  );
}

export default App;

import '../styles/App.css';
import getDataFromAPI from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  // VARIABLES ESTADO

  const [dataCharacter, setDataCharacter] = useState([]);
  // USEEFFECT
  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;

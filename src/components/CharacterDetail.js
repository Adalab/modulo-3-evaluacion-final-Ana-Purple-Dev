import { useParams } from 'react-router-dom';

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  return (
    <>
      <h2>Detalles del personaje</h2>
      <img
        className='card__img'
        src={characterFound.image}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      />
      <h3>Nombre</h3>
      <h4>{characterFound.name}</h4>
      <h3>Especie</h3>
      <h4>{characterFound.species}</h4>

      <h3>Planeta de Origen</h3>
      <h4>{characterFound.origin.name}</h4>
      <h3>Número de episodios en los que aparece</h3>
      <h4>{characterFound.episode}</h4>
      <h3>Estado</h3>
      <h4>{characterFound.status}</h4>
    </>
  );
}
export default CharacterDetail;

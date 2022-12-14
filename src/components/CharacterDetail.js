import { useParams } from 'react-router-dom';

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);

  return (
    <>
      <h2 className='detail title'>Detalles del personaje</h2>
      <img
        className='detail img'
        src={characterFound.image}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      />
      <h3 className='detail name'>Nombre</h3>
      <h4 className='text'>{characterFound.name}</h4>
      <h3 className='detail specie'> Especie</h3>
      <h4 className='text'>{characterFound.species}</h4>
      <h3 className='detail origin'>Planeta de Origen</h3>
      <h4 className='text'>{characterFound.origin}</h4>
      <h3 className='detail episodes'>
        Número de episodios en los que aparece
      </h3>
      <h4 className='text'>{characterFound.episode}</h4>
      <h3 className='detail status'>Estado</h3>
      <h4 className='text'>{characterFound.status}</h4>
    </>
  );
}
export default CharacterDetail;

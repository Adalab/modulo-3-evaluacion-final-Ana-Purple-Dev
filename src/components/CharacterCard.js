import { NavLink } from 'react-router-dom';

function CharacterCard(props) {
  const statusCharacter = () => {
    if (props.character.status === 'Alive') {
      return '❤️';
    } else if (props.character.status === 'Dead') {
      return '💀';
    } else {
      return '❓';
    }
  };
  const speciesCharacter = () => {
    if (props.character.species === 'Human') {
      return props.character.gender === 'Female' ? '👩‍🦰' : '👨‍🦰';
    } else {
      return '👽';
    }
  };
  return (
    <li key={props.character.id} className='card'>
      <NavLink to={`/character/${props.character.id}`} className='card__link'>
        <img
          className='card__img'
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />

        <h3 className='card__title'>{props.character.name}</h3>
        <h4 className='card__species'>Especie: {speciesCharacter()}</h4>
        <h4 className='card__status'>Estado: {statusCharacter()}</h4>
      </NavLink>
    </li>
  );
}
export default CharacterCard;

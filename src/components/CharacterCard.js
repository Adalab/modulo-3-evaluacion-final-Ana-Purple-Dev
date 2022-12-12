import { NavLink } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li key={props.character.id} className='card'>
      <NavLink to={`/character/${props.character.id}`}>
        <img
          className='card__img'
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />

        <h4 className='card__title'>{props.character.name}</h4>
        <h4 className='card__family'>{props.character.species}</h4>
      </NavLink>
    </li>
  );
}
export default CharacterCard;

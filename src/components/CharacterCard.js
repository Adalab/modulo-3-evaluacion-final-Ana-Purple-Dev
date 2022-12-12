function CharacterCard(props) {
  return (
    <li key={props.character.id} className='card'>
      <a href={props.character.id}>
        <img
          className='card__img'
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />

        <h4 className='card__title'>{props.character.name}</h4>
        <p className='card__family'>{props.character.species}</p>
      </a>
    </li>
  );
}
export default CharacterCard;

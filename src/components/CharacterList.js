import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });
  return (
    <section>
      <ul>
        {characterElement.length > 0
          ? characterElement
          : 'No hay ningún personaje con ese nombre'}
      </ul>
    </section>
  );
};
export default CharacterList;

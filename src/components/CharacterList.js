import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  characters.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });

  return (
    <section className='sectionList'>
      <ul className='card__list'>
        {characterElement.length > 0 ? (
          characterElement
        ) : (
          <>
            <p>No hay ningún personaje con ese nombre</p>
            <img src='./images/error.jpeg' alt='rick and morty' />
          </>
        )}
      </ul>
    </section>
  );
};
export default CharacterList;

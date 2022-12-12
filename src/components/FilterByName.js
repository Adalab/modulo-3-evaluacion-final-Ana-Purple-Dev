function FilterByName(props) {
  const handleInput = (ev) => {
    props.handleFilterByName(ev.target.value);
  };
  return (
    <>
      <label className='form__label ' htmlFor='Name'>
        Busca el personaje por nombre
      </label>
      <input type='search' value={props.filterByName} onInput={handleInput} />
    </>
  );
}
export default FilterByName;

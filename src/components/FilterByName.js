function FilterByName(props) {
  const handleInput = (ev) => {
    props.handleFilterByName(ev.target.value);
  };
  return (
    <>
      <div className='div__name'>
        <label className='form__label ' htmlFor='Name'>
          Busca el personaje por nombre
        </label>
        <input
          type='search'
          className='input__search'
          value={props.filterByName}
          onInput={handleInput}
        />
      </div>
    </>
  );
}
export default FilterByName;

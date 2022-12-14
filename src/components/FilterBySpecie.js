function FilterBySpecie(props) {
  const handleChange = (ev) => {
    props.handleFilterBySpecie(ev.target.value);
  };
  return (
    <>
      <div className='div__specie'>
        <label className='form__label ' htmlFor='Species'>
          Especie:
        </label>
        <select
          className='form__input-text'
          name='species'
          id='species'
          onChange={handleChange}
        >
          <option value='All'>Todas </option>
          <option value='Human'>Human</option>
          <option value='Alien'>Alien</option>
        </select>
      </div>
    </>
  );
}

export default FilterBySpecie;

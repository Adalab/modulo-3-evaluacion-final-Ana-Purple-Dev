function FilterByGender(props) {
  const handleChangeGender = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };
  return (
    <>
      <div className='div__gender'>
        <label className='form__label ' htmlFor='Gender'>
          Género:
        </label>
        <select
          className='form__input-text'
          name='gender'
          id='gender'
          onChange={handleChangeGender}
        >
          <option value='All'>Todas </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
    </>
  );
}
export default FilterByGender;

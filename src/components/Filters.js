import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByGender from './FilterByGender';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <FilterByName
          handleFilterByName={props.handleFilterByName}
          filterByName={props.filterByName}
        />
        <FilterBySpecie handleFilterBySpecie={props.handleFilterBySpecie} />
        <FilterByGender handleFilterByGender={props.handleFilterByGender} />
      </form>
    </>
  );
};
export default Filters;

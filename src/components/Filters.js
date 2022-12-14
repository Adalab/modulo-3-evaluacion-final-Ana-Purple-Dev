import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

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
      </form>
    </>
  );
};
export default Filters;

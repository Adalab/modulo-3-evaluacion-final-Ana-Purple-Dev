import FilterByName from './FilterByName';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FilterByName handleFilterByName={props.handleFilterByName} />
      </form>
    </>
  );
};
export default Filters;

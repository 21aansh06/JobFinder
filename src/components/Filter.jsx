const Filter = ({ filter, setFilter }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6 offset-md-3">
        <div className="input-group">
          <span className="input-group-text bg-primary text-white fw-semibold">Filter</span>
          <select
            id="filter"
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full-Stack">Full-Stack</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

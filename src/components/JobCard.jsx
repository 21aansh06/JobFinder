const JobCard = ({ job }) => {
  const handleApply = () => {
    alert(`You have applied for the ${job.title} position at ${job.company}.`);
  };

  return (
    <div className="card border-0 shadow-lg mb-4">
      <div className="card-body">
        <h4 className="card-title text-dark fw-bold">{job.title}</h4>
        <h6 className="card-subtitle mb-2 text-secondary">{job.company} • {job.location}</h6>
        <p className="card-text text-muted">{job.description}</p>
        <button className="btn btn-outline-primary mt-3 w-100" onClick={handleApply}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;

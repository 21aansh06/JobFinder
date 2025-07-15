import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <div className="row">
      {jobs.map((job) => (
        <div className="col-md-6" key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
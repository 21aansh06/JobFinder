import { useState } from "react";
import jobsData from "./data/jobs";
import Filter from "./components/Filter";
import JobList from "./components/JobList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobsData : jobsData.filter((job) => job.type === filter);

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="bg-white p-5 rounded shadow-sm">
          <h1 className="text-center mb-4 text-primary fw-bold display-6">JobFinder</h1>
          <Filter filter={filter} setFilter={setFilter} />
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}

export default App;

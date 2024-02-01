import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import JobsList from './pages/JobsList';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/scrap-jobs">Scrap jobs</Link>
          </li>
          <li>
            <Link to="/jobs">List of Scrapped Jobs</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/scrap-jobs" element={<SearchPage />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

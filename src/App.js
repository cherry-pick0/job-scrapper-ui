import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import JobsList from './pages/JobsList'
import JobDetails from './pages/JobDetails'
import 'halfmoon/css/halfmoon.min.css'

function App () {
  return (
    <div className="container" style={{ height: '100vh' }}>
    <Router>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbar-collapse-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active" to="/scrap-jobs">Scrap jobs</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active" to="/jobs">Jobs List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrap-jobs" element={<SearchPage />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

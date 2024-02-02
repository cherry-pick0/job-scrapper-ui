import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function JobsList () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/jobs/linkedin-jobs')
        setJobs(response.data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div>
      <Header/>
      <h2>Jobs List</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <Link to={`/jobs/${job._id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobsList

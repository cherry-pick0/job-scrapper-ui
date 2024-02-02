import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'

function SearchPage () {
  const [locationSearchTerm, setLocationSearchTerm] = useState('')
  const [positionSearchTerm, setPositionSearchTerm] = useState('')

  const [searchRequestsList, setSearchRequestsList] = useState([])

  const fetchSearchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/jobs/search-requests')
      setSearchRequestsList(response.data)
    } catch (error) {
      console.error('Error fetching search requests:', error)
    }
  }

  useEffect(() => {
    fetchSearchRequests()
  }, [])

  const handleLocationSearchChange = (event) => {
    setLocationSearchTerm(event.target.value)
  }

  const handlePositionSearchChange = (event) => {
    setPositionSearchTerm(event.target.value)
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault()
    const requestBody = {
      location: locationSearchTerm,
      position: positionSearchTerm,
      seniority_level: 'Mid/Senior',
      remote: true
    }

    try {
      const response = await axios.post('http://localhost:3001/api/jobs/scrape/linkedin', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Search submitted:', response.data)
      // Update the list of search requests
      fetchSearchRequests()
    } catch (error) {
      console.error('Error submitting search:', error)
    }
  }

  return (
    <div>
    <Header />
      <div className="container">
        <form className="row g-3 mb-5" onSubmit={handleSearchSubmit}>
          <div className="col-sm-12">
          <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={locationSearchTerm}
              onChange={handleLocationSearchChange}
              required
            />
          </div>
          <div className="col-sm-12">
          <label htmlFor="position" className="form-label">Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              value={positionSearchTerm}
              onChange={handlePositionSearchChange}
              required
            />
          </div>

          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-primary ms-auto">Search and scrap data</button>
          </div>
        </form>

        <hr />

        <p className="h4">Search requests</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Position</th>
              <th scope="col">Location</th>
              <th scope="col" className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
          {searchRequestsList.map(searchRequest => (
              <tr key={searchRequest.id}>
                <th scope="row">{searchRequest._id}</th>
                <td>{searchRequest.searchParams.position}</td>
                <td>{searchRequest.searchParams.location}</td>
                <td className="text-end">{searchRequest.status}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default SearchPage

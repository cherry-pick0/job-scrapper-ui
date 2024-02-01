import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';

function SearchPage() {
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const [positionSearchTerm, setPositionSearchTerm] = useState('');

  const [searchRequestsList, setSearchRequestsList] = useState([]);

  const fetchSearchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/jobs/search-requests');
      setSearchRequestsList(response.data);
    } catch (error) {
      console.error('Error fetching search requests:', error);
    }
  };

  useEffect(() => {
    fetchSearchRequests();
  }, []);


  const handleLocationSearchChange = (event) => {
    setLocationSearchTerm(event.target.value);
  };

  const handlePositionSearchChange = (event) => {
    setPositionSearchTerm(event.target.value);
  };


  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const requestBody = {
      location: locationSearchTerm,
      position: positionSearchTerm,
      seniority_level: "Mid/Senior",
      remote: true
    };
  
    try {
      const response = await axios.post('http://localhost:3001/api/jobs/scrape/linkedin', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Search submitted:', response.data);
      // Update the list of search requests
      fetchSearchRequests();
    } catch (error) {
      console.error('Error submitting search:', error);
    }
  };

  return (
    <div>
    <Header />
      <h1>Request job scrapping</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={locationSearchTerm}
          onChange={handleLocationSearchChange}
        />
        <input
          type="text"
          placeholder="Position"
          value={positionSearchTerm}
          onChange={handlePositionSearchChange}
        />
        <button type="submit">Search and scrap data</button>
      </form>

      <div>
      <h2>Search Requests</h2>
      <ul>
        {searchRequestsList.map(searchRequest => (
          <li key={searchRequest.id}>
            {searchRequest._id}: {searchRequest.searchParams.position}, {searchRequest.searchParams.location}, {searchRequest.status}
          </li>
        ))}
      </ul>
    </div>
      <Footer />
    </div>
  );
}

export default SearchPage;

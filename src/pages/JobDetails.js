import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

function JobDetails() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/jobs/linkedin-jobs/${id}`);
        setJobDetails(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!jobDetails) return <div>No job details found.</div>;

  return (
    <div>
      <Header />
      <h2>{jobDetails.title}</h2>
      <p><strong>Company:</strong> {jobDetails.company}</p>
      <p><strong>Location:</strong> {jobDetails.location}</p>
      <p><strong>Posted on:</strong> {new Date(jobDetails.postingDate).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {jobDetails.description?.slice(0,1000)}...</p>
      <a href={jobDetails.link} target="_blank" rel="noopener noreferrer">Job Link</a>
    </div>
  );
}

export default JobDetails;

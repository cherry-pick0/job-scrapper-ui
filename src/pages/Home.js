import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row g-3">
            <div className="col-sm-6">
            <Link to='scrap-jobs' style={{ textDecoration: 'none' }}>
                <div className="card">
                    <div className="card-header">Scrap jobs</div>
                    <div className="card-body">
                        Create search requests to scrap data from LinkedIn.
                    </div>
                </div>
            </Link>
            </div>
            <div className="col-sm-6">
            <Link to='jobs' style={{ textDecoration: 'none' }}>
                <div className="card">
                    <div className="card-header">Jobs List</div>
                    <div className="card-body">
                    See list of scrapped job data and their details.
                    </div>
                </div>
            </Link>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

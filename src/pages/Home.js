import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="row g-3">
            <div class="col-sm-6">
            <Link to='scrap-jobs' style={{textDecoration: 'none'}}>
                <div class="card">
                    <div class="card-header">Scrap jobs</div>
                    <div class="card-body">
                        Create search requests to scrap data from LinkedIn.
                    </div>
                </div>
            </Link>
            </div>
            <div class="col-sm-6">
            <Link to='jobs' style={{textDecoration: 'none'}}>
                <div class="card">
                    <div class="card-header">Jobs List</div>
                    <div class="card-body">
                    See list of scrapped job data and their details.
                    </div>
                </div>
            </Link>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

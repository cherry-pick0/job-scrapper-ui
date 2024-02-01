// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>My React App</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/scrap-jobs">Scrap jobs</Link>
          </li>
          <li style={{ display: 'inline' }}>
            <Link to="/jobs">Jobs List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

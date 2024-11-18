import React from 'react';
import './Header.css';

const Header = ({ searchInput, setSearchInput, handleSearch, handleClear }) => {
  return (
    <header className="header">
      <div className="logo">TravelBloom</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a destination or keyword"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}  // Update state on input change
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </header>
  );
};

export default Header;

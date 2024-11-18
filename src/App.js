import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import Header from './components/Header/Header';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  const destinations = [
    {
      name: "Canada",
      city: "Toronto",
      image: "https://via.placeholder.com/300",
      description: "A diverse and cosmopolitan city, Toronto is known for its iconic CN Tower, cultural events, and diverse neighborhoods.",
    },
    {
      name: "USA",
      city: "New York",
      image: "https://via.placeholder.com/300",
      description: "The bustling city of New York is famous for its skyline, Times Square, and Broadway shows.",
    },
    // Add more destinations as needed
  ];

  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(destinations);  // Default to all destinations

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setResults(destinations); // If the search input is empty, show all destinations
    } else {
      const filteredResults = destinations.filter((destination) =>
        destination.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleClear = () => {
    setSearchInput("");  // Clear the search input
    setResults(destinations);  // Reset results to all destinations
  };

  return (
    <Router>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <Routes>
        <Route path="/" element={<Home searchResults={results} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

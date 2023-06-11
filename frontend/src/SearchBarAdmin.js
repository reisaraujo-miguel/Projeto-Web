import React, { useState } from 'react';
import './SearchBarAdmin.css';

const SearchBarAdmin = () => {
  const admins = ['Sacha Baron Cohen', 'Angela Merkel', 'Joaquin Phoenix', 'Bob Ross', 'Michael Scott', 'Dilvan Abreu', 'Michael Jackson'];
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState('');

  const performSearch = (value) => {
    // Filter the admins based on the search value
    return admins.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);

    // Perform the search and update searchResults state
    const results = performSearch(value);
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSearchResults([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search admins"
      />

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div
              className={`result-item ${result === selectedResult ? 'selected' : ''}`}
              key={index}
              onClick={() => handleResultClick(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}

      {selectedResult && (
        <div className="selected-result">
          Selected: {selectedResult}
        </div>
      )}
    </div>
  );
};

export default SearchBarAdmin;

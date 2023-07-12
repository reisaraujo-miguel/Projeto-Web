import React, { useState } from 'react';
import './SearchBarAdmin.css';

async function getData(endpoint){
  const url = 'http://localhost:3001/' + endpoint
  try{
    const response = await fetch(url,{
      method: 'GET',
    });
    const data = await response.json();
    
    console.log(data)
    return data;
  }
  catch(e){
    console.log(e)
  }
  return [];
}

const SearchBarAdmin = ({placeholder, endpoint, setData}) => {
  
  
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState('');

  const performSearch = async (value) => {
    // Filter the admins based on the search value
    let admins = await getData(endpoint);
    return admins.filter((admin) =>
      admin.username.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSearchChange = async (e) => {
    const { value } = e.target;
    setSearchText(value);

    // Perform the search and update searchResults state
    const results = await performSearch(value);
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    setData(result);
    setSelectedResult(result);
    setSearchResults([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder={placeholder}
      />

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div
              className={`result-item ${result === selectedResult ? 'selected' : ''}`}
              key={index}
              onClick={() => handleResultClick(result)}
            >
              {result.username}
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default SearchBarAdmin;

import { useState } from "react";
import "./SearchBarAdmin.css";

async function getData(endpoint) {
  const url = "http://localhost:3001/" + endpoint;

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }

  return [];
}

const SearchBarAdmin = ({ placeholder, endpoint, setData, searchType = 0 }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");

  const performSearchAdmin = async (value) => {
    // Filter the admins based on the search value
    let admins = await getData(endpoint);
    return admins.filter((admin) =>
      admin.username.toLowerCase().includes(value.toLowerCase())
    );
  };

  const performSearchProduct = async (value) => {
    // Filter the admins based on the search value
    let products = await getData(endpoint);
    return products.filter((product) =>
      product.slug.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSearchChange = async (e) => {
    const { value } = e.target;
    setSearchText(value);

    let results = {};
    // Perform the search and update searchResults state
    if (searchType === 0) {
      results = await performSearchAdmin(value);
    } else {
      results = await performSearchProduct(value);
    }

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
              className={`result-item ${
                result === selectedResult ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleResultClick(result)}
            >
              {searchType === 0 && result.username}
              {searchType === 1 && result.slug}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBarAdmin;

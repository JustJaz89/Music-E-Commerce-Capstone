import React, { useState } from 'react';
import SearchBar from './SearchBar';

import axios from "axios"

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const fetchTracks = async () => {
        try {
            let lowerCaseSearchTerm = searchTerm.toLowerCase();
            let response = await axios.get(
                `http://127.0.0.1:5000/api/tracks${lowerCaseSearchTerm}`
            );
            console.log(response.data)
            setSearchResults(response.data.items);
        } catch (error) {}
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchTracks();
        alert(`You searched for ${searchTerm}!`);
    };

    return (
        <div className="container search">
            <h1>Search</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}

            />
            <ResultsList searchResults={searchResults} />
        </div>
    );
};

export default SearchPage;
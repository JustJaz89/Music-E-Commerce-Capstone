import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from "./ResultsList";
import axios from "axios";
import TracksTable from '../../components/TracksTable/TracksTable';


const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const fetchTracks = async () => {
        try {
            let lowerCaseSearchTerm = searchTerm.toLowerCase();
            let response = await axios.get(
                `http://127.0.0.1:5000/api/tracks/${lowerCaseSearchTerm}`
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
            <h1>Search Page</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                handleSubmit={handleSubmit}
            />
            <ResultsList searchResults={searchResults} />
            <div>
                {/* <SearchBar  /> */}
                {/* <TracksTable parentTracks={tracks} /> */}
            </div>
        </div>
    );
};

export default SearchPage;
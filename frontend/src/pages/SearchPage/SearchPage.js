import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from "./ResultsList";
import axios from "axios"


const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const fetchTracks = async () => {
        try {
            let lowerCaseSearchTerm = searchTerm.toLowerCase();
            let response = await axios.get(
                `http://127.0.0.1:5000/api/login${lowerCaseSearchTerm}`
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
                handleSubmit={handleSubmit}
            />
            <ResultsList searchResults={searchResults} />
            {/* <div className="border-box">
                <SearchBar />
            </div> */}
        </div>
    );
};

export default SearchPage;
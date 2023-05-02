import React from 'react';
import { Link } from "react-router-dom";

const ResultsList = ({searchResults}) => {
    console.log(searchResults);
    return (
        <div className="resultsList">
            <h2>Results List</h2>
            {searchResults.map((tracks, index) => (
                <Link key={index} to={`/details/${tracks.id}`}>
                    <div>
                        <h3>{tracks.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ResultsList;
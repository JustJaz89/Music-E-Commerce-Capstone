import React from 'react';

const SearchBar = ({searchTerm = "", setSearchTerm, handleSubmit}) => {
    return (
        <div className="container">
            <form onSubmit={(event) => handleSubmit(event)} className="searchForm">
                <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;

// const SearchBar = (props) => {
//     return (
//         <div>
//         <input
//             type="text"
//             placeholder="Search"
//             onChange={(event) => props.filterTracks(event)}
//         />
//         </div>
//     );
// }
 
// export default SearchBar;
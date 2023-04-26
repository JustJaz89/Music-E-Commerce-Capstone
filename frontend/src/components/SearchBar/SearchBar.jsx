import React from 'react';

const SearchBar = ({searchTerm = "", setSearchTerm, handleSubmit}) => {
    return (
        <form onSubmit={(event) => handleSubmit(event)} className="searchForm">
            <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
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
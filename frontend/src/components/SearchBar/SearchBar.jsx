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
 
                {/* <span flex class="flex">
                    <input type="search"
                        placeholder="What type of track are you looking for?"
                        ng-model="keyword"
                        id="searchBoxMobile"
                        mobile-search="textboxLevel"
                        mobile-search-keyword="keyword"
                        class="ng-pristine ng-valid ng-isolate-scope ng-empty ng-touched"
                        aria-invalid="false" style=""/>
                    <button class="search-btn" aria-label="search button"></button>
                    <input type="submit" style="visibility: hidden" />
                </span> */}
            </form>
        </div>
    );
};

export default SearchBar;

// SearchBar from Music Library
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
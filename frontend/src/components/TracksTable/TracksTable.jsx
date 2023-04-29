// import React from 'react';
// import "./MusicTable.css";

// import mental from "../../images/Mental.jpg"

// const MusicTable = () => {
//     return (
//         <article>
//             <img src={mental} alt="Mental" />
//             <div>
//                 <h3>Mental</h3>
//                 <p>$49.95</p>
//             </div>
//         </article>
//     );
// };

// export default MusicTable;

import React from 'react';
// import SearchBar from '../SearchBar/SearchBar';

const TracksTable = (props) => {

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th>Image_URL</th> */}
                        <th>Id</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>BPM</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {props.parentTracks.map((track, index) => {
                    return (
                    <tr key={track.id}>
                        <td>{index + 1}</td>
                        <td>{track.title}</td>
                        <td>{track.time}</td>
                        <td>{track.bpm}</td>
                        <td>{track.genre}</td>
                        <td>{track.release_date}</td>
                        <td>{track.price}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TracksTable;

// function TrackSearch() {
//     const [query, setQuery] = useState("");
//     const [filteredData, setFilteredData] = useState([]);
  
//     function handleSearch(event) {
//       const newQuery = event.target.value;
//       setQuery(newQuery);
//       const newData = query.filter(
//         (item) =>
//           item.title.includes(newQuery) ||
//           item.time.includes(newQuery) ||
//           item.bpm.includes(newQuery) ||
//           item.genre.includes(newQuery) ||
//           item.releaseDate.includes(newQuery) ||
//           item.price.includes(newQuery)
//       );
//       setFilteredData(newData);
//     }
  
//     return (
//         <div>
//           <input type="text" placeholder="Search" onChange={handleSearch} />
//           {filteredData.length > 0 ? (
//             <TracksTable data={filteredData} />
//           ) : (
//             <TracksTable data={TrackSearch} />
//           )}
//         </div>
//       );
//     }

// const data = [
//     {
//         id: 1,
//         title: "",
//         time: "",
//         bpm: "",
//         genre: "",
//         releaseDate: "",
//         price: "",
//     },
// ]

// export default TracksTable;
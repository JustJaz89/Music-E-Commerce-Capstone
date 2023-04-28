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

import React, { useState } from 'react';


const MusicTable = (props) => {

    return (
        <div className="container">
            {/* <h1>Music Library</h1> */}
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Running Time</th>
                    </tr>
                </thead>
                <tbody>
                {props.parentSongs.map((song, index) => {
                    return (
                    <tr key={song.id}>
                        <td>{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td>{song.running_time}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

function MusicSearch() {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
    function handleSearch(event) {
      const newQuery = event.target.value;
      setQuery(newQuery);
      const newData = query.filter(
        (item) =>
          item.title.includes(newQuery) ||
          item.time.includes(newQuery) ||
          item.bpm.includes(newQuery) ||
          item.genre.includes(newQuery) ||
          item.releaseDate.includes(newQuery)
      );
      setFilteredData(newData);
    }
  
    return (
        <div>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          {filteredData.length > 0 ? (
            <MusicTable data={filteredData} />
          ) : (
            <MusicTable data={MusicSearch} />
          )}
        </div>
      );
    }

const data = [
    {
        id: 1,
        title: "",
        time: "",
        bpm: "",
        genre: "",
        releaseDate: "",
        price: "",
    },
]

export default MusicTable;

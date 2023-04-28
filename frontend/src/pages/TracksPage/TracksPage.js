import React, { useState } from 'react';


const TracksTable = (props) => {

    return (
        <div className="container">
            {/* <table className="table table-striped table-dark"> */}
            <table>
                <thead>
                    <tr>
                        {/* <th>Image_URL</th> */}
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

function TrackSearch() {
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
          item.releaseDate.includes(newQuery) ||
          item.price.includes(newQuery)
      );
      setFilteredData(newData);
    }
  
    return (
        <div>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          {filteredData.length > 0 ? (
            <TracksTable data={filteredData} />
          ) : (
            <TracksTable data={TrackSearch} />
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

export default TracksTable;
import React from 'react';
// import SearchBar from '../SearchBar/SearchBar';

const TracksTable = (props) => {

    return (
        <div className="container">
           {/* <div className="border-box">
            <SearchBar filterSongs={filterSongs}/>
          </div> */}
            {/* <table className="table table-striped table-dark"> */}
            <table>
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
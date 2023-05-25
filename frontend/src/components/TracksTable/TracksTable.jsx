import React, { useState } from 'react';
// import TracksPage from '../../pages/TracksPage/TracksPage';
import SearchBar from '../SearchBar/SearchBar';
import TracksPage from '../../pages/TracksPage/TracksPage';

const TracksTable = (props) => {
    // console.log(TracksPage);

    const [search, setSearch] = useState("");

    let filteredTracks = props.parentTracks.filter(
        (x) =>
            x.title.toLowerCase().includes(search.toLowerCase()) ||
            x.bpm.toLowerCase().includes(search.toLowerCase()) ||
            x.genre.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="container">
            <div>
                <SearchBar search={search} setSearch={setSearch}/>
                {/* <TracksPage /> */}
            </div>
            <table className="table table-striped table-dark">
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
                {filteredTracks.map((track, index) => {
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
            {/* <TracksPage />
            <TracksTable /> */}
            {/* <SearchBar filterTracks={filterTracks} />
            <MusicPlayer />
            <getAllTracks />
            <TracksPage
                parentTracks={tracks}
                tracks={tracks}
                setTracks={setTracks}/>
            <addNewTrack /> */}
        </div>
        // <div className="container">
        //     <h2>Tracks</h2>
        //     <TracksPage />
        //     <TracksTable />
        // </div>
    );
};

export default TracksTable;
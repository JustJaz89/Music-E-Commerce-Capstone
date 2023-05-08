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
import TracksPage from '../../pages/TracksPage/TracksPage';

const TracksTable = (props) => {
    console.log(TracksPage);
    return (
        <div className="container">
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
            <TracksPage />
            <TracksTable />
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
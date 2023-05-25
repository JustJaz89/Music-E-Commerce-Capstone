import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TracksTable from '../../components/TracksTable/TracksTable';
import SearchBar from '../../components/SearchBar/SearchBar';
// import { MusicPlayer } from '../../components/PlayingMusic/PlayingMusic';
import AddTrack from '../../components/AddTrack/AddTrack';
import DeleteTrack from '../../components/DeleteTrack/DeleteTrack';
import ContactForm from '../ContactPage/ContactPage';

const TracksPage = (props) => {

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getAllTracks();
    }, []);

    async function getAllTracks() {
        let response = await axios.get(`http://127.0.0.1:5000/api/tracks`);
        setTracks(response.data)
    };

    async function addNewTrack(newTrack) {
        let response = await axios.post('http://127.0.0.1:5000/api/tracks', newTrack);
        if(response.status === 201){
        await getAllTracks();
        }
    };

    return (
        <div>
            <div>
                {/* <SearchBar  /> */}
                <TracksTable parentTracks={tracks} />
            </div>
            <div className="border-box">
                <h3 style={{margin: "1em"}}>Add
                <medium className="text-muted">Track</medium></h3>
                <AddTrack />
            </div>
            <div className="border-box">
                <h3 style={{margin: "1em"}}>Delete
                <medium className="text-muted">Track</medium></h3>
                <DeleteTrack />
            </div>
            <div className="border-box">
                {/* <h3 style={{margin: "1em"}}>Contact
                <medium className="text-muted">Us</medium></h3> */}
                <ContactForm />
            </div>
        </div>
    //     <div>
    //         <SearchBar />
    //         <TracksTable />
    //         <TracksPage
    //             parentTracks={tracks}
    //             tracks={tracks}
    //             setTracks={setTracks}/>
    //     </div>
        // <div className="container">
        //     <table className="table table-striped table-dark">
        //         <thead>
        //             <tr>
        //                 <th>Image_URL</th>
        //                 <th>Id</th>
        //                 <th>Title</th>
        //                 <th>Time</th>
        //                 <th>BPM</th>
        //                 <th>Genre</th>
        //                 <th>Release Date</th>
        //                 <th>Price</th>
        //             </tr>
        //         </thead>
        //         <body>
        //         {props.parentTracks.map((track, index) => {
        //             return (
        //             <tr key={track.id}>
        //                 <td>{index + 1}</td>
        //                 <td>{track.title}</td>
        //                 <td>{track.time}</td>
        //                 <td>{track.bpm}</td>
        //                 <td>{track.genre}</td>
        //                 <td>{track.release_date}</td>
        //                 <td>{track.price}</td>
        //             </tr>
        //             );
        //         })}
        //         </body>
        //     </table>
        //     <TracksTable />
        //     <SearchBar filterTracks={filterTracks} />
        //     <MusicPlayer />
        //     <getAllTracks />
        //     <TracksPage
        //         parentTracks={tracks}
        //         tracks={tracks}
        //         setTracks={setTracks}/>
        //     <addNewTrack />
        // </div>
    );
};

export default TracksPage;
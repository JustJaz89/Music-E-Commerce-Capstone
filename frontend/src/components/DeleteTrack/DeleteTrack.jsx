import React, { useState } from 'react';
import "./DeleteTrack.css";

const DeleteTrack = (props) => {

    const [title, setTitle] = useState("");
    const [running_time, setRunningTime] = useState("");
    const [bpm, setBpm] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let deleteTrack = {
            title: title,
            running_time: running_time,
            bpm: bpm,
            genre: genre,
            release_date: release_date,
            price: price
        };
        console.log(deleteTrack);
        props.deleteTrackProperty(deleteTrack)
    }

    return (
        <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Running Time</label>
                <input type="number" className="form-control" value={running_time} onChange={(event) => setRunningTime(parseFloat(event.target.value))} />
            </div>
            <div className="form-group">
                <label>BPM</label>
                <input type="number" className="form-control" id="inputBpm" placeholder="BPM" value={bpm} onChange={(event) => setBpm(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Genre</label>
                <input type="text" className="form-control" id="inputGenre" placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Release Date</label>
                <input type="date" className="form-control" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" id="inputPrice" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" style={{"margin-top": "1em"}} >Delete</button>
        </form>
    );
};
 
export default DeleteTrack;
// import React, {useState} from 'react';
// import './TrackForm.css'
// import axios from "axios";

// const TrackForm = (props) => {
//     const [title, setTitle] = useState('')
//     const [time, setTime] = useState('')
//     const [bpm, setBpm] = useState('')
//     const [genre, setGenre] = useState('')
//     const [release_date, setReleaseDate] = useState('')
//     const [price, setPrice] = useState('')

// const handleSubmit = async(event) =>{
//     event.preventDefault()
//     let newTrack = {
//         title:title,
//         time:time,
//         bpm:bpm,
//         genre: genre,
//         release_date:release_date,
//         price: price
//     }
//     await props.addTrack(newTrack)
// }

//         return ( 
//             <div className="formDiv">
//             <form onSubmit={handleSubmit}>
//                 <h1>Add a Track</h1>
//                 <label>Title</label>
//                 <input name="title" onChange={(event)=>setTitle(event.target.value)} />
//                 <label>Time</label>
//                 <input name="time" onChange={(event)=>setTime(event.target.value)} />
//                 <label>BPM</label>
//                 <input type="number" name="bpm" onChange={(event)=>setBpm(event.target.value)} />
//                 <label>Genre</label>
//                 <input name="genre" onChange={(event)=>setGenre(event.target.value)} />
//                 <label>Release Date</label>
//                 <input type="date" onChange={(event)=>setReleaseDate(event.target.value)} />
//                 <label>Price</label>
//                 <input type="number" onChange={(event)=>setPrice(event.target.value)} />
//                 <button type="submit">Add Track</button>
//             </form>
//             </div>
//          );
// }
 
// export default TrackForm;
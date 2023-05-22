// import React, { useEffect, useState } from "react";
// import './EditTrack.css'
// import axios from "axios";

// const EditTrack = ({ handleClose, show, props, editTrack }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
//     const [title, setTitle]=useState(props.title)
//     const [time, setTime]=useState(props.time)
//     const [bpm, setBpm]=useState(props.bpm)
//     const [genre, setGenre]=useState(props.genre)
//     const [release_date, setReleaseDate]=useState(props.release_date)
//     const [price, setPrice]=useState(props.price)

//     const handleSubmit = async(event) => {
//         event.preventDefault()
//         let updatedTrack = {
//             title: title,
//             time: time,
//             bpm:bpm,
//             genre:genre,
//             release_date:release_date,
//             price:price
//         }
//         await editTrack(props.id, updatedTrack).then(alert('Track updated!'))
//         handleClose()
//         window.location.reload();
//     }

//     // useEffect(() =>{
//     //   console.log('reload')
//     // }, [props])

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//       <form onSubmit={handleSubmit}>
//                 <h1>Edit Track</h1>
//                 <label>Title</label>
//                 <input name="title" onChange={(event)=>setTitle(event.target.value)} defaultValue={props.title}/>
//                 <label>Time</label>
//                 <input name="time" onChange={(event)=>setTime(event.target.value)} defaultValue={props.time} />
//                 <label>BPM</label>
//                 <input type="number" className="form-control" id="inputBpm" placeholder="BPM" value={bpm} onChange={(event) => setBpm(event.target.value)} defaultValue={props.bpm} />
//                 <label>Genre</label>
//                 <input name="genre" onChange={(e)=>setGenre(e.target.value)} defaultValue={props.genre}/>
//                 <label>Release Date</label>
//                 <input type="date" name="release_date" onChange={(e)=>setReleaseDate(e.target.value)} defaultValue={props.release_date}/>
//                 <label>Price</label>
//                 <input type="number" className="form-control" id="inputPrice" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)} defaultValue={props.price} />                
//                 <button type="submit">Update Track</button>
//             </form>
//         <button type="button" onClick={handleClose}>
//           Close
//         </button>
//       </section>
//     </div>
//   );
// }

// export default EditTrack;
// import React from "react";
// import "./MusicTable.css";
// import EditTrack from "../EditTrack/EditTrack";
// import { useState, useEffect } from "react";
// import axios from 'axios'

// const MusicTable = (props) => {
//   const [show, setShow] = useState(false);
//   const [toggle, setToggle] = useState()
//   const [track, setTrack] = useState([])

//   const showModal = () => {
//     setShow(true);
//   };

//   const hideModal = () => {
//     setShow(false);
//   };

//   useEffect(() => {
//     props.getAllTracks()
//   }, [toggle, props.toggle])

//   const handleEdit = (track) => {
//     console.log("Editing track", track);
//     setTrack(track);
//     showModal();
//   }

//   const calculateMinutes = (seconds) => {
//     return seconds/60
//   }

//   if (props.tracks !== [])
//     return (
//       <div>
//         <table className="center">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Time</th>
//               <th>BPM</th>
//               <th>Genre</th>
//               <th>Release Date</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.tracks.map((track) => {
//               return (
//                 <tr key={track.id}>
//                   <td>{track.title}</td>
//                   <td>{calculateMinutes(track.time).toFixed(2)}</td>
//                   <td>{track.bpm}</td>
//                   <td>{track.genre}</td>
//                   <td>{track.release_date}</td>
//                   <td>{track.price}</td>
//                   <td><button onClick={() => props.deleteTrack(track.id)} type="submit">
//                     Delete Track
//                   </button></td>
//                   <td><button type="button" onClick={() => handleEdit(track)}>
//                     Edit Track
//                   </button></td>
//                 </tr>
//               );
//             })}
//                 <tr>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td><b>Total Time: {props.time}</b></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//           </tbody>
//         </table>
//         {/* Proper location for modal display */}
//         <EditTrack show={show} handleClose={hideModal} props={track} editTrack={props.editTrack}>
//           <p>Edit Track</p>
//         </EditTrack>
//       </div>
//     );
//   else {
//     return (
//       <div>
//         <h1>Loading Music, Please Wait</h1>
//       </div>
//     );
//   }
// };

// export default MusicTable;

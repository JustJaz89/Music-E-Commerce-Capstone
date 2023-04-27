// import React, { useState } from 'react';

// function MusicPlayer({track}) {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const audioRef = useRef(null);
  
//     const handlePlay = () => {
//       setIsPlaying(true);
//       audioRef.current.play();
//     };
  
//     const handlePause = () => {
//       setIsPlaying(false);
//       audioRef.current.pause();
//     };
  
//     return (
//       <div>
//         <h2>Now Playing</h2>
//         <h3>{track.title} - {track.artist}</h3>
//         <audio ref={audioRef} src={song.audio} />
//         {isPlaying ?
//           <button onClick={handlePause}>Pause</button> :
//           <button onClick={handlePlay}>Play</button>
//         }
//       </div>
//     );
//   }
  
//   export { MusicPlayer };
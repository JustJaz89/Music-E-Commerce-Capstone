import React, { useState, useEffect, useRef } from 'react';
import useSound from "use-sound";
import justjazbeats from "../../assets/songs-mp3/justjazbeats/Mental";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

// function SearchResults({results}) {
//     return (
//         <div>
//             <h2>Search Results</h2>
//             <ul>
//                 {results.map((track) => (
//                     <li key={track.id}>
//                         <a href={`/track/${track.id}`}>{track.title}</a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

function MusicPlayer({track}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(justjazbeats);
    // const audioRef = useRef(null);
  
    // const handlePlay = () => {
    //   setIsPlaying(true);
    //   audioRef.current.play();
    // };
  
    // const handlePause = () => {
    //   setIsPlaying(false);
    //   audioRef.current.pause();
    // };

    const playingButton = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    };
  
    return (
      // <div>
      //   <h2>Now Playing</h2>
      //   <h3>{track.title}</h3>
      //   <audio ref={audioRef} src={track.audio} />
      //   {isPlaying ?
      //     <button onClick={handlePause}>Pause</button> :
      //     <button onClick={handlePlay}>Play</button>
      //   }
      // </div>
      <div className="component">
      <h2>Now Playing</h2>
      <img
        className="musicCover"
        src="C:\Users\princ\Desktop\devCodeCamp\Capstone\Music-E-Commerce-Capstone\frontend\src\assets\images\Mental.jpg"
      />
      <div>
        <h3 className="title">Mental</h3>
        <p className="subTitle">JustJazBeats</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#ff2876" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#ff2876" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#ff2876" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#ff2876" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
    );
  }
  
  export default MusicPlayer;
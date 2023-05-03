import React, { useState, useRef } from 'react';

function SearchResults({results}) {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map((track) => (
                    <li key={track.id}>
                        <a href={`/track/${track.id}`}>{track.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MusicPlayer({track}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
  
    const handlePlay = () => {
      setIsPlaying(true);
      audioRef.current.play();
    };
  
    const handlePause = () => {
      setIsPlaying(false);
      audioRef.current.pause();
    };
  
    return (
      <div>
        <h2>Now Playing</h2>
        <h3>{track.title}</h3>
        <audio ref={audioRef} src={track.audio} />
        {isPlaying ?
          <button onClick={handlePause}>Pause</button> :
          <button onClick={handlePlay}>Play</button>
        }
      </div>
    );
  }
  
  export {SearchResults, MusicPlayer};
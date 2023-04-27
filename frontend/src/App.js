// General Imports
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TracksPage from "./pages/TracksPage/TracksPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ContactPage from "./pages/ContactPage/ContactPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  // const [tracks, setTracks] = useState([])

  // useEffect(() => {
  //   getAllTracks();
  // }, [])

  // async function getAllTracks() {
  //   let response = await axios.get(`http://127.0.0.1:5000/api/tracks`);
  //   setTracks(response.data)
  // }

  // async function addNewTrack(newTrack) {
  //   let response = await axios.post('http://127.0.0.1:5000/api/tracks', newTrack);
  //   if(response.status === 201){
  //     await getAllTracks();
  //   }
  // }

  // const filterTracks = (event) => {
  //   let filterValue = event.target.value;
  //   if (filterValue === "") {
  //     getAllTracks();
  //   } else {
  //    let filteredTracks = tracks.filter(
  //       (x) =>
  //         x.title.toLowerCase().includes(filterValue.toLowerCase()) ||
  //         x.bpm.toLowerCase().includes(filterValue.toLowerCase()) ||
  //         x.genre.toLowerCase().includes(filterValue.toLowerCase())
  //     );
  //     setTracks(filteredTracks);
  //  }
  // };

  return (
    
    // <div>
    //   <div className="container-fluid">
    //   <div className="row">
    //     <h3 style={{margin: "1em"}}>Music
    //     <medium className="text-muted">Library</medium></h3>
    //     <div className="col-sm">
    //       <div className="border-box">
    //         <MusicTable parentTracks={tracks}/>
    //       </div>
    //       <div className="border-box">
    //         <AddNewTrack addNewTrackProperty={addNewTrack} />
    //       </div>
    //     </div>
    //     <div className="col-">
    //       <div className="border-box">
    //         <SearchBar filterTracks={filterTracks}/>
    //       </div>
    //     </div>
    //   </div>     
    // </div>
    <div>
      <Navbar />
      {/* <MusicTable /> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

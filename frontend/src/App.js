// General Imports
import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

// New Imports
// import React, { useState } from 'react';
// import axios from "axios";

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
import TracksTable from './pages/TracksPage/TracksPage';
import SearchBar from './components/SearchBar/SearchBar';
import MusicTable from './components/MusicTable/MusicTable';
import EditTrack from "./components/EditTrack/EditTrack";
import TrackForm from './components/TrackForm/TrackForm';
import ContactForm from './components/ContactForm/ContactForm';
// import { MusicPlayer } from './components/PlayingMusic/PlayingMusic';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddTrack from './components/AddTrack/AddTrack';
import DeleteTrack from './components/DeleteTrack/DeleteTrack';
// import ContactForm from './components/ContactForm/ContactForm';

function App() {

  // const [tracks, setTracks] = useState([]);
  // const [toggle, setToggle] = useState();
  // const [time, setTime] = useState();

  // const filterTracks = (event) => {
  //   let filterValue = event.target.value;
  //   if (filterValue === "") {
  //     getAllTracks();
  //   } else {
  //    let filteredTracks = tracks.filter(
  //       (track) =>
  //       track.title.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       track.bpm.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       track.genre.toLowerCase().includes(filterValue.toLowerCase())
  //     );
  //     setTracks(filteredTracks);
  //  }
  // };

  // const getAllTracks = async() =>{
  //   let response = await axios.get(`http://127.0.0.1:5000/api/tracks`);
  //   setTracks(response.data.tracks);
  //   // setTime(response.data.total_running_time);
  // }

  // const deleteTrack = async (key) => {
  //   await axios.delete(`http://127.0.0.1:5000/api/tracks/${key}`)
  //   setToggle(!toggle)
  // }

  // const addTrack = async(newTrack) => {
  //   await axios.post(`http://127.0.0.1:5000/api/tracks`, newTrack)
  //   setToggle(!toggle);
  // }

  // const editTrack = async(id, updatedTrack) => {
  //   await axios.put(`http://127.0.0.1:5000/api/tracks/${id}`, updatedTrack)
  // }

  // const getTracks = (tracks) => {
  //   setTracks(tracks);
  // };

  return (
    <div>
      <Navbar />
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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            {/* <div className="border-box">
              <TracksTable filteredTracks />
            </div> */}
            {/* <div className="border-box">
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
              <h3 style={{margin: "1em"}}>Contact
              <medium className="text-muted">Us</medium></h3>
              <ContactForm />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <div>
    //   <Navbar />
    //   <div className="main">
    //     <h1> Music Library </h1>
    //     <TrackForm getTracks={getTracks} addTrack={addTrack} />
    //     <p/>
    //     <SearchBar filterTracks={filterTracks} />
    //     <MusicTable toggle={toggle} tracks={tracks} getAllTracks={getAllTracks} filterTracks={filterTracks} time={time} deleteTrack={deleteTrack} editTrack={editTrack}/>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;

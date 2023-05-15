// General Imports
import React from 'react';
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
// import TracksTable from './pages/TracksPage/TracksPage';
// import SearchBar from './components/SearchBar/SearchBar';
// import ContactForm from './components/ContactForm/ContactForm';
// import { MusicPlayer } from './components/PlayingMusic/PlayingMusic';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddTrack from './components/AddTrack/AddTrack';
import DeleteTrack from './components/DeleteTrack/DeleteTrack';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

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
              <h3 style={{margin: "1em"}}>Contact
              <medium className="text-muted">Us</medium></h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

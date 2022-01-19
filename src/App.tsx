import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { SavedManager } from './persistance/savedManager';
import {
  HomePage
} from "./containers";
import './App.css';

function App() {
  // const savedProp: PersistanceType = SavedManager();
  return (
    <>
      <h1>STARSTAGRAM 🌌</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="saved" element={<SavedPage {...savedProp}/>} /> */}
      </Routes>
    </>
  );
}

export default App;
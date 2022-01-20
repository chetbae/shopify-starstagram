import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  // SavedPage
} from "./containers";
import { typography, containers } from "./styles";

import './App.css';

function App() {

  return (
    <containers.Top30>
      <containers.PageContainer>
        <typography.AppTitle >Shopify Front End Developer Intern Challenge 🌌</typography.AppTitle>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="saved" element={<SavedPage />} /> */}
        </Routes>
      </containers.PageContainer>
  </containers.Top30>
  );
}

export default App;
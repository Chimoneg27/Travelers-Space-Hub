import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/My Profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

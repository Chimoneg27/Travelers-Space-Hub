/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/My Profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import '../Styles/Missions.css';
import React from 'react';
import MissionProfile from './MissionProfile';

const MyProfile = () => (
  <div className="my-profile-page">
    <div className="missions-sec">
      <h2>My Missions</h2>
      <MissionProfile />
    </div>
  </div>
);

export default MyProfile;

import '../Styles/Missions.css';
import '../Styles/RocketsRender.css';
import React from 'react';
import MissionProfile from './MissionProfile';
import RocketProfile from './RocketProfile';

const MyProfile = () => (
  <div className="my-profile-page">
    <div className="missions-sec">
      <h2>My Missions</h2>
      <MissionProfile />
    </div>

    <div className="rockets-sec">
      <h2>My Rockets</h2>
      <RocketProfile />
    </div>
  </div>
);

export default MyProfile;

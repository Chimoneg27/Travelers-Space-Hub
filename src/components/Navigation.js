import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navigation.css';
import logoImage from '../assets/Space-logo.jpg';

const Navigation = () => (
  <>
    <nav className="navigation">
      <div className="Logo">
        <img src={logoImage} alt="logo" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <ul className="items">
        <li><NavLink to="/" activeclassname="active-link" className="noactive-link">Rockets</NavLink></li>
        <li><NavLink to="/Missions" activeclassname="active-link" className="noactive-link">Missions</NavLink></li>
        <li><NavLink to="/My Profile" activeclassname="active-link" className="noactive-link">My Profile</NavLink></li>
      </ul>
    </nav>
    <div className="line" />
  </>
);

export default Navigation;

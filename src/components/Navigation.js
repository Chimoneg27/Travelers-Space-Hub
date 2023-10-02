/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <h2>Logo</h2>
    <ul className="items">
      <li><NavLink to="/" activeclassname="active-link" className="noactive-link">Rockets</NavLink></li>
      <li><NavLink to="/Missions" activeclassname="active-link" className="noactive-link">Missions</NavLink></li>
      <li><NavLink to="/My Profile" activeclassname="active-link" className="noactive-link">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <h2>Logo</h2>
    <ul className="items">
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/Missions">Missions</NavLink></li>
      <li><NavLink to="/My Profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;

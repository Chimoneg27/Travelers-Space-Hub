import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Navigation from '../components/Navigation';

const links = [
  {
    id: 1,
    path: '/',
    nav: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    nav: 'Missions',
  },
  {
    id: 3,
    path: '/myProfile',
    nav: 'My Profile',
  },
];

const App = () => (
  <BrowserRouter>
    <Navigation links={links} />
  </BrowserRouter>
);

describe('Test Navigation', () => {
  it('should Navigation all links', () => {
    expect(screen.getByText('')).toMatchSnapshot();
    render(<App />);
    expect(Navigation).toMatchSnapshot();
  });
});

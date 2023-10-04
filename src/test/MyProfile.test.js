import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureMockStore } from '@reduxjs/toolkit';
import MissionProfile from '../components/MissionProfile';
import RocketProfile from '../components/RocketProfile';
import MyProfile from '../components/MyProfile';

const mockStore = configureMockStore([]);

describe('MyProfile', () => {
  test('renders MyProfile component correctly', async () => {
    const store = mockStore({
      rocket: {
        rocketArr: [
          {
            id: '1',
            name: 'Rocket1',
          },
          {
            id: '2',
            name: 'Rocket2',
          },
        ],
        isDataFetched: true,
      },
      mission: {
        missionArr: [
          {
            id: '1',
            name: 'Mission1',
          },
          {
            id: '2',
            name: 'Mission2',
          },
        ],
        isLoading: true,
      },
    });
    const ProfileComponent = () => (
      <Provider store={store}>
        <MyProfile>
          <MissionProfile />
          <RocketProfile />
        </MyProfile>
      </Provider>
    );
    const { getText } = render(<ProfileComponent />);
    expect(getText).toMatchSnapshot();
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});

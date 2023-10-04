/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureMockStore([]);

test('renders rockets component correctly', async () => {
  const store = mockStore({
    rockets: {
      rocketArr: [
        {
          id: '1',
          name: 'Rocket1',
          flickr_images: ['image1'],
          description: 'Description1',
        },
        {
          id: '2',
          name: 'Rocket2',
          flickr_images: ['image2'],
          description: 'Description2',
        },

      ],
      isDataFetched: true,
    },
  });
  const RocketsComponent = () => (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  const { getText } = render(<RocketsComponent />);
  expect(getText).toMatchSnapshot();
  expect(screen.getByText('Rocket1')).toBeInTheDocument();
  expect(screen.getByText('Rocket2')).toBeInTheDocument();
  expect(screen.getByText('Description1')).toBeInTheDocument();
});

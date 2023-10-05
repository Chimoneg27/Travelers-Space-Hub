import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/Rockets';
import RocketRender from '../components/RocketRender';

const mockStore = configureMockStore([]);
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
test('Check RocketRender', async () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets>
        <RocketRender />
      </Rockets>
    </Provider>,

  ).toJSON();
  expect(tree).toMatchSnapshot();
});

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../Redux/store';
import '@testing-library/jest-dom';
import MissionProfile from '../components/MissionProfile';
import RocketProfile from '../components/RocketProfile';

describe('Test My Profile page', () => {
  it('Check if the component has changed', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The component should render the page', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });

  it('The component should render the page container', () => {
    render(
      <Provider store={store}>
        <MyProfile>
          <MissionProfile />
          <RocketProfile />
        </MyProfile>
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
});

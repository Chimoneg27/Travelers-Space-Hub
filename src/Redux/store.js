/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
export default store;

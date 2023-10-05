/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v4/rockets';

export const getRocketData = createAsyncThunk('rockets/getRocketData', async () => {
  const response = await axios.get(rocketAPI);
  return response.data;
});

const rocketReducer = createSlice({
  name: 'SpaceX Rockets',
  initialState: {
    rocketArr: [],
    isLoading: false,
    error: null,
    isDataFetched: false,
  },
  reducers: {
    addReservation: (state, action) => {
      const updatedRocketArr = state.rocketArr.map((rocketObj) => (rocketObj.id === action.payload
        ? { ...rocketObj, reserved: false } : rocketObj));
      return { ...state, rocketArr: updatedRocketArr };
    },
    cancelReservation: (state, action) => {
      const updatedRocketArr = state.rocketArr.map((rocketObj) => (rocketObj.id === action.payload
        ? { ...rocketObj, reserved: true } : rocketObj));
      return { ...state, rocketArr: updatedRocketArr };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketArr = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          flickr_images: rocket.flickr_images,
          description: rocket.description,
        }));
        state.isDataFetched = true;
      })
      .addCase(getRocketData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { cancelReservation, addReservation } = rocketReducer.actions;
export default rocketReducer.reducer;

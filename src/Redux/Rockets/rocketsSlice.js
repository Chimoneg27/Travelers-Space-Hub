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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketArr = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          type: rocket.type,
          flickr_images: rocket.flickr_images,
        }));
      })
      .addCase(getRocketData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default rocketReducer.reducer;

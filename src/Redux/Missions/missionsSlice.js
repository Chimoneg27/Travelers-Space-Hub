/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiLink = 'https://api.spacexdata.com/v3/missions';

export const getMissionsData = createAsyncThunk('missions/getMissionsData', async (thunkAPI) => {
  try {
    const response = await axios.get(apiLink);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissionsData.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getMissionsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        }));
      })
      .addCase(getMissionsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default missionsSlice.reducer;

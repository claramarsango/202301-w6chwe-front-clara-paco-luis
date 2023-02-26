import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Robot from '../../model/Robot';
import { fetchRobots } from './robotsAPI';

export interface CardListState {
  value: Robot[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardListState = {
  value: [],
  status: 'idle',
};

export const getRobotsAsync = createAsyncThunk(
  'cardList/fetchRobots',
  async () => {
    const response = await fetchRobots();
    return response;
  },
);

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getRobotsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getRobotsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getRobotsAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectRobots = (state: RootState) => state.cardList.value;

export default cardListSlice.reducer;

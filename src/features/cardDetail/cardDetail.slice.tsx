import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Robot from '../../model/Robot';
import { fetchRobot } from './robotAPI';
import { RootState } from '../../app/store';

export interface CardDetail {
  value: Robot;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardDetail = {
  value: {
    id: '',
    name: '',
    img: '',
    characteristics: {
      velocity: 0,
      resistence: 0,
      creation: '',
    },
  },
  status: 'idle',
};

export const getRobotByIdAsync = createAsyncThunk(
  'cardDetail/fetchRobot',
  async (id: string) => {
    const response = await fetchRobot(id);
    return response;
  },
);

export const cardDetailSlice = createSlice({
  name: 'cardDetail',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getRobotByIdAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getRobotByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getRobotByIdAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectRobot = (state: RootState) => state.cardDetail.value;

export default cardDetailSlice.reducer;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardDetailReducer from '../features/cardDetail/cardDetail.slice';
import cardListReducer from '../features/cardList/cardListSlice';

export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    cardDetail: cardDetailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

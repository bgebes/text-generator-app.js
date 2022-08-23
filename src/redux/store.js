import { configureStore } from '@reduxjs/toolkit';
import ParasReducer from './Paras/ParasSlice';

export const store = configureStore({
  reducer: {
    paras: ParasReducer,
  },
});

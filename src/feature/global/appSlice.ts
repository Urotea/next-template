import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JWT } from '../../models/jwt';

export type AppState = {
  jwt: JWT | null;
};

export const initialState: AppState = {
  jwt: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;

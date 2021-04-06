import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
    login: boolean,
};

export const initialState: AppState = {
    login: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
      loginButtonTapped: (state) => {
        state.login = true;
      },
  },
});

export default appSlice.reducer;

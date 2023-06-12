import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  refreshThunk,
  logoutThunk,
  loginThunk,
  registrationThunk,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  error: '',
  isLoading: false,
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLogin = true;
        state.error = '';
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.token = null;
        state.user = initialState;
        state.isLoading = false;
        state.isLogin = false;
        state.error = '';
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from '../../services/ApiConfig';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      thunkAPI.rejectWithValue('no token');
    }
    setToken(persistedToken);
    try {
      const { data } = await instance.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      instance.post('/users/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { instance } from '../services/ApiConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../auth/operations';

export const getMonthInfo = createAsyncThunk(
  'water/getMonthInfo',
  async (currentMonth, thunkAPI) => {
    try {
      const { data } = await instance.get(`/water/${currentMonth}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayInfo = createAsyncThunk(
  'today/getTodayInfo',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/water');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newRecord, thunkAPI) => {
    try {
      const { data } = await instance.post('/water', {
        ...newRecord,
      });
      thunkAPI.dispatch(getTodayInfo());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/water/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ waterVolume, date, _id }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/water/${_id}`, {
        waterVolume,
        date,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

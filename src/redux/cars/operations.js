import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e865deb17821a9d9dc9172W.mockapi.io/";
axios.defaults.params = { page: 1, limit: 12 };

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("adverts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCarsThunk = createAsyncThunk(
  "cars/loadMoreCars",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get("adverts", { params: { page } });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

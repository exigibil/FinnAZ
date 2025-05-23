import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  exchangeRate: null,
  loading: false,
  error: null,
};

export const fetchExchangeRate = createAsyncThunk(
  "/exchange-rate/fetchexchangeRate",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/exchange-rate/");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch exchange rate");
    }
  }
);

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.loading = false;
        state.exchangeRate = action.payload;
      })
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const { actions } = exchangeSlice;
export default exchangeSlice.reducer;  

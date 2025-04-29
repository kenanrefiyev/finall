import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currentCurrency: 'USD',
    conversionRates: {
      USD: { rate: 1, symbol: '$', flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
      AZN: { rate: 1.7, symbol: '₼', flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" }
    }
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer; 
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

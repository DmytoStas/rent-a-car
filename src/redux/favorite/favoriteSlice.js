import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArr: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav: (state, { payload }) => {
      state = [...state].push(payload);
    },
    removeFromFav: (state, { payload }) => {
      state = state.filter(item => item !== payload);
    },
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;

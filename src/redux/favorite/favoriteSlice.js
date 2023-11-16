import { createSlice } from '@reduxjs/toolkit';

const initialState = { favorites: [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav: (state, { payload }) => ({
      ...state,
      favorites: [...state.favorites].concat(payload),
    }),
    removeFromFav: (state, { payload }) => ({
      ...state,
      favorites: state.favorites.filter(item => item.id !== payload.id),
    }),
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;

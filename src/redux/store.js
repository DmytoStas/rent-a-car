import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteReducer from './favorite/favoriteSlice';
import advertsAPI from './api/advertsAPI';

const favPersistConfig = {
  key: 'favoriteList',
  storage: storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(favPersistConfig, favoriteReducer),
    [advertsAPI.reducerPath]: advertsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsAPI.middleware),
});

export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
//import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,//it means it is the responsibility of cryptoApi.reducer to manage the state of [cryptoApi.reducerPath] and act as its reducer
  //  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
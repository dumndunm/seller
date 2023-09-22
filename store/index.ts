import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { rootApiSlice } from './api/reducers';

const reducer = combineReducers(reducers);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
    rootApiSlice.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootStateT = ReturnType<typeof reducer>;
export { store };

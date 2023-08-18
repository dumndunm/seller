import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from '@/store/reducers';
import { rootApiSlice } from '@/store/api/reducers';

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

export { store };
export type RootStateT = ReturnType<typeof reducer>;

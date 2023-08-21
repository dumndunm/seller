import { rootApiSlice } from './api/reducers';

const reducers = {
  [rootApiSlice.reducerPath]: rootApiSlice.reducer,
};

export { reducers };

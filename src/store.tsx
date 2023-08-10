import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import JokesReducer from './JokesSlice.tsx';

const store = configureStore({
  reducer: {
    jokes: JokesReducer,
  },
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

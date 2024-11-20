import { configureStore } from '@reduxjs/toolkit';
import brainReducer from '../features/brain/brainSlice';
// import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    brain: brainReducer,
    // auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './Slices/currentWeatherSlice';

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
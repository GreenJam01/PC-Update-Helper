import { combineReducers } from '@reduxjs/toolkit';
import { AppData } from '../constants';
import { hardwareSlice } from '../slices/hardwareSlice';
import { authSlice } from '../slices/authSlice';
import { assembliesSlice } from '../slices/assembliesSlice';

export const rootReducer = combineReducers({
  [AppData.Hardware]: hardwareSlice.reducer,
  [AppData.Auth]: authSlice.reducer,
  [AppData.Assemblies]: assembliesSlice.reducer,
});

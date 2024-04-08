import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppData } from '../constants';
import { Assembly } from '../types/assembly';
import { fetchAssemblies } from '../store/api-actions';

export type AssembliesState = {
    assemblies: Assembly[];
    isAssembliesDataLoading:boolean;
}

const initialState: AssembliesState = {
  assemblies: [],
  isAssembliesDataLoading: false
};

export const assembliesSlice = createSlice({
  name: AppData.Assemblies,
  initialState,
  reducers: {
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isAssembliesDataLoading = action.payload;
    },
    setAssemblies: (state, action: PayloadAction<Assembly[]>) => {
      state.assemblies = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchAssemblies.fulfilled, (state, action) => {
      state.isAssembliesDataLoading = true;
      state.assemblies = action.payload;
    });
  },
  selectors: {
    assemblies: (state) => state.assemblies,
    isAssembliesDataLoading: (state) => state.isAssembliesDataLoading
  }
});

export const AssembliesSelectors = assembliesSlice.selectors;

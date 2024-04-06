import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';
import { AppData } from '../constants';
import { CPU, GPU, HDD, Motherboard, RAM} from '../types/hardwares';
import { fetchHardwaresAction } from '../store/api-actions';


type HardwareState = {
  cpu: CPU[];
  gpu: GPU[];
  ram: RAM[];
  motherboard: Motherboard[];
  hdd: HDD[];
  isHardwareDataLoading:boolean;
}

const initialState:HardwareState = {
  cpu: [],
  gpu: [],
  ram: [],
  motherboard: [],
  hdd: [],
  isHardwareDataLoading:false
};
export const hardwareSlice = createSlice({
  initialState, name: AppData.Hardware,
  reducers: {
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isHardwareDataLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHardwaresAction.pending, (state) => {
        state.isHardwareDataLoading = true;
      })
      .addCase(fetchHardwaresAction.fulfilled, (state, action) => {
        state.isHardwareDataLoading = false;
        state.cpu = action.payload.cpu;
        state.gpu = action.payload.gpu;
        state.ram = action.payload.ram;
        state.motherboard = action.payload.motherboard;
        state.hdd = action.payload.hdd;
      })
      .addCase(fetchHardwaresAction.rejected, (state) => {
        state.isHardwareDataLoading = false;
      });
  },
  selectors: {
    cpu: (state) => state.cpu,
    gpu: (state) => state.gpu,
    ram: (state) => state.ram,
    motherboard: (state) => state.motherboard,
    hdd: (state) => state.hdd,
    isHardwareDataLoading: (state) => state.isHardwareDataLoading,
  },
});
export const hardwaresSelectors = hardwareSlice.selectors;
export const hardwaresActions = hardwareSlice.actions;

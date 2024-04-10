import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit/react';
import { AppData } from '../constants';
import { CPU, GPU, HDD, Motherboard, RAM} from '../types/hardwares';
import { fetchHardwaresAction } from '../store/api-actions';
import { hardwares } from '../data/hardware-list';
import { toast } from 'react-toastify';


type HardwareState = {
  cpu: CPU[];
  gpu: GPU[];
  ram: RAM[];
  motherboard: Motherboard[];
  hdd: HDD[];
  selectedHardwareHeader: string;
  isHardwareDataLoading:boolean;
}

const initialState:HardwareState = {
  cpu: [],
  gpu: [],
  ram: [],
  motherboard: [],
  hdd: [],
  selectedHardwareHeader: hardwares[0],
  isHardwareDataLoading:false,
};
export const hardwareSlice = createSlice({
  initialState, name: AppData.Hardware,
  reducers: {
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isHardwareDataLoading = action.payload;
    },
    setSelectedHardwareHeader: (state, action: PayloadAction<string>) => {
      state.selectedHardwareHeader = action.payload;
    }
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
        toast.success('Железо получено');
      })
      .addCase(fetchHardwaresAction.rejected, (state) => {
        state.isHardwareDataLoading = false;
      });
  },
  selectors: {
    cpu: (state) => state.cpu.map((cpu) => ({
      ...cpu,
      urlImage: 'https://ir.ozone.ru/s3/multimedia-f/6685279503.jpg'
    })),
    gpu: (state) => state.gpu,
    ram: (state) => state.ram,
    motherboard: (state) => state.motherboard,
    hdd: (state) => state.hdd,
    selectedHardwareHeader: (state) => state.selectedHardwareHeader,
    isHardwareDataLoading: (state) => state.isHardwareDataLoading,
  },
});
export const hardwaresSelectors = {
  getBrandsCpu: createSelector(hardwareSlice.selectors.cpu,
    (cpus) => cpus.reduce((acc:string[], cpu) => {
      if (!acc.includes(cpu.brand)) {
        acc.push(cpu.brand);
      }
      return acc;
    }, [])
  ),
  getBrandsGpu: createSelector(hardwareSlice.selectors.gpu,
    (gpus) => gpus.reduce((acc:string[], gpu) => {
      if (!acc.includes(gpu.brand)) {
        acc.push(gpu.brand);
      }
      return acc;
    }, [])
  ),
  getBrandsHdd: createSelector(hardwareSlice.selectors.hdd,
    (hdds) => hdds.reduce((acc:string[], hdd) => {
      if (!acc.includes(hdd.brand)) {
        acc.push(hdd.brand);
      }
      return acc;
    }, [])
  ),
  getBrandsRam: createSelector(hardwareSlice.selectors.ram,
    (rams) => rams.reduce((acc:string[], ram) => {
      if (!acc.includes(ram.brand)) {
        acc.push(ram.brand);
      }
      return acc;
    }, [])
  ),
  getBrandsMotherboards: createSelector(hardwareSlice.selectors.motherboard,
    (motherboards) => motherboards.reduce((acc:string[], motherboard) => {
      if (!acc.includes(motherboard.brand)) {
        acc.push(motherboard.brand);
      }
      return acc;
    }, [])
  ),
  ...hardwareSlice.selectors,};
export const hardwaresActions = hardwareSlice.actions;

import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit/react';
import { AppData, Sorts } from '../constants';
import { CPU, GPU, HDD, HardwareType, Motherboard, RAM} from '../types/hardwares';
import { fetchHardwaresAction } from '../store/api-actions';
import { hardwares } from '../data/hardware-list';
import { toast } from 'react-toastify';
import { Sort } from '../types/sort';
import { isCPU, isGPU } from '../util/util';


type HardwareState = {
  cpu: CPU[];
  gpu: GPU[];
  ram: RAM[];
  motherboard: Motherboard[];
  hdd: HDD[];
  selectedHardwareHeader: string;
  isHardwareDataLoading:boolean;
  sort: Sort;
}

const initialState:HardwareState = {
  cpu: [],
  gpu: [],
  ram: [],
  motherboard: [],
  hdd: [],
  selectedHardwareHeader: hardwares[0],
  isHardwareDataLoading:false,
  sort: Sorts.None
};
export const hardwareSlice = createSlice({
  initialState, name: AppData.Hardware,
  reducers: {
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isHardwareDataLoading = action.payload;
    },
    setSelectedHardwareHeader: (state, action: PayloadAction<string>) => {
      state.selectedHardwareHeader = action.payload;
    },
    setHardwareSorting: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setHardware: (state, action: PayloadAction<HardwareType>) => {
      if(isCPU(action.payload)) {
        const updatedHardware = action.payload as CPU;
        const index = state.cpu.findIndex((hardware) => hardware.id === updatedHardware.id);
        if (index !== -1) {
          state.cpu[index] = updatedHardware; // заменяем старую сборку на новую
        }
      } else if (isGPU(action.payload)){
        const updatedHardware = action.payload as GPU;
        const index = state.gpu.findIndex((hardware) => hardware.id === updatedHardware.id);
        if (index !== -1) {
          state.gpu[index] = updatedHardware; // заменяем старую сборку на новую
        }
      }
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
    cpu: (state) => state.cpu,
    gpu: (state) => state.gpu,
    ram: (state) => state.ram,
    motherboard: (state) => state.motherboard,
    hdd: (state) => state.hdd,
    selectedHardwareHeader: (state) => state.selectedHardwareHeader,
    isHardwareDataLoading: (state) => state.isHardwareDataLoading,
    sort: (state) => state.sort
  },
});
export const hardwaresSelectors = {
  ...hardwareSlice.selectors,
  getCpu: createSelector(hardwareSlice.selectors.cpu,
    hardwareSlice.selectors.sort, (cpus, sort) => [...cpus].sort(sort.func)),
  getGpu: createSelector(hardwareSlice.selectors.gpu,
    hardwareSlice.selectors.sort, (gpus, sort) => [...gpus].sort(sort.func)),
  getRam: createSelector(hardwareSlice.selectors.ram,
    hardwareSlice.selectors.sort, (rams, sort) => [...rams].sort(sort.func)),
  getHdd: createSelector(hardwareSlice.selectors.hdd,
    hardwareSlice.selectors.sort, (hdds, sort) => [...hdds].sort(sort.func)),
  getMotherboard: createSelector(hardwareSlice.selectors.motherboard,
    hardwareSlice.selectors.sort, (motherboards, sort) => [...motherboards].sort(sort.func)),

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
  ),};
export const hardwaresActions = hardwareSlice.actions;

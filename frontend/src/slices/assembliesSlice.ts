import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppData } from '../constants';
import { Assembly } from '../types/assembly';
import { createAssembly, deleteAssembly, fetchAssemblies, putAssembly } from '../store/api-actions';
import { toast } from 'react-toastify';

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
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAssemblies.fulfilled, (state, action) => {
      state.isAssembliesDataLoading = false;
      state.assemblies = action.payload;
      toast.success('Сборки получены');
    })
      .addCase(fetchAssemblies.pending, (state)=> {
        state.isAssembliesDataLoading = true;
      })
      .addCase(fetchAssemblies.rejected, (state) => {
        state.isAssembliesDataLoading = false;
        toast.error('Сборки не получены');
      })
      .addCase(deleteAssembly.fulfilled, (state, action) => {
        state.assemblies = state.assemblies.filter((assembly) => assembly.id !== action.payload.id);
        toast.success('Сборка удалена');
      }
      )
      .addCase(deleteAssembly.rejected, () => {
        toast.error('Сборка не удалена');
      })
      .addCase(createAssembly.fulfilled, (state, action) => {
        state.assemblies.push(action.payload);
        toast.success('Сборка создана');
      }
      )
      .addCase(putAssembly.fulfilled, (state, action) => {
        const updatedAssembly = action.payload; // новая сборка
        const index = state.assemblies.findIndex((assembly) => assembly.id === updatedAssembly.id);
        if (index !== -1) {
          state.assemblies[index] = updatedAssembly; // заменяем старую сборку на новую
        }
      }
      );
  },
  selectors: {
    assemblies: (state) => state.assemblies,
    isAssembliesDataLoading: (state) => state.isAssembliesDataLoading
  }
});

export const AssembliesSelectors = assembliesSlice.selectors;
export const AssembliesActions = assembliesSlice.actions;

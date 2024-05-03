import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppData } from '../constants';
import { HardwaresType } from '../types/hardwares';

export type FavortesState = {
    favorites: HardwaresType;
}

export const favoritesInitialState: FavortesState = {
  favorites: [],
};

export const favoritesSlice = createSlice(
  {
    name: AppData.Favorites,
    initialState: favoritesInitialState,
    reducers: {
      addFavorite: (state, action: PayloadAction<HardwaresType>) => {
        state.favorites.push(action.payload);
      },
      removeFavorite: (state, action: PayloadAction<HardwaresType>) => {
        state.favorites = state.favorites.filter((hardware) => hardware.id !== action.payload.id);
      }
    }
  }
);

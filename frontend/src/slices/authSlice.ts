import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '../types/nullable';
import { AppData, AuthorizationStatus } from '../constants';
import { UserData } from '../types/user';
import { checkAuthAction, signinAction, signoutAction, signupAction } from '../store/api-actions';
import { toast } from 'react-toastify';

type AuthState = {
    authorizationStatus: AuthorizationStatus;
    user: Nullable<UserData>;
}

export const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const authSlice = createSlice({
  name: AppData.Auth,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        toast.warn('Ошибка аутентификации');
      })
      .addCase(signinAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(signinAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(signupAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      }
      ).addCase(signoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
  selectors: {
    getAuthorizationStatus: (state) => state.authorizationStatus,
    getUser: (state) => state.user
  },
});


export const authSelectors = authSlice.selectors;

export const { setAuthorizationStatus } = authSlice.actions;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '../types/nullable';
import { AppData, AuthorizationStatus } from '../constants';
import { UserData } from '../types/user';
import { checkAuthAction, fetchHardwaresAction, signinAction, signoutAction, signupAction } from '../store/api-actions';
import { toast } from 'react-toastify';

type AuthState = {
    authorizationStatus: AuthorizationStatus;
    user: Nullable<UserData>;
}

export const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
};

export const authSlice = createSlice({
  name: AppData.Auth,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUser:(state, action: PayloadAction<Nullable<UserData>>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signinAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        toast.success(`Привет, ${action.payload.username}`);
      })
      .addCase(signinAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(signupAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        toast.success('Аккаунт создан');
      }
      )
      // .addCase(signoutAction.fulfilled, (state) => {
      //   state.authorizationStatus = AuthorizationStatus.NoAuth;
      //   state.user = null;
      // })
      .addCase(signupAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        toast.warn('Ошибка регистрации');
      })
      .addCase(signoutAction.fulfilled, 
        (state) => {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
          state.user = null;
          toast.success('Вы вышли из аккаунта');
        });
  },
  selectors: {
    getAuthorizationStatus: (state) => state.authorizationStatus,
    getUser: (state) => state.user
  },
});


export const authSelectors = authSlice.selectors;

export const { setAuthorizationStatus, setUser } = authSlice.actions;

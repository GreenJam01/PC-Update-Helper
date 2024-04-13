import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { CPU, GPU, HDD, Hardwares, Motherboard, RAM } from '../types/hardwares';
import { APIRoutes, AppRoutes, AuthorizationStatus } from '../constants';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user';
import { Assembly } from '../types/assembly';
import { setAuthorizationStatus, setUser } from '../slices/authSlice';

export const redirectToRoute = createAction<AppRoutes>('redirectToRoute');

export const fetchHardwaresAction = createAsyncThunk<Hardwares, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHardwares',
  async (_arg, { extra: api}) => {
    const {data:cpu} = await api.get<CPU[]>(APIRoutes.GetAllCPU);
    const {data:ram} = await api.get<RAM[]>(APIRoutes.GetAllRAM);
    const {data:gpu} = await api.get<GPU[]>(APIRoutes.GetAllGPU);
    const {data:hdd} = await api.get<HDD[]>(APIRoutes.GetAllHDD);
    const {data:motherboard} = await api.get<Motherboard[]>(APIRoutes.GetAllMotherboard);
    return {cpu, ram, gpu, hdd, motherboard};
  }
);

export const fetchAssemblies = createAsyncThunk<Assembly[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAssemblies',
  async (_arg, { extra: api}) => {
    const {data: assemblies} = await api.get<Assembly[]>(APIRoutes.Assembly);
    return assemblies;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api}) => {
    const {data: user} = await api.get<UserData>(APIRoutes.Signin);
    dispatch(fetchAssemblies());
    console.log(user);
    return user;
  },
);
export const signinAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/signin',
    async ({username, password}, {dispatch, extra: api}) => {
      const {data: user} = await api.post<UserData>(APIRoutes.Signin, {username, password});
      saveToken(user.accessToken);
      dispatch(fetchAssemblies());
      dispatch(redirectToRoute(AppRoutes.Main));
      return user;
    },
  );

export const signoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    (_arg, {dispatch, }) => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
      dispatch(redirectToRoute(AppRoutes.Main));
      dropToken();
    },
  );

export const signupAction = createAsyncThunk<UserData,AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/signup',
    async ({username,email, password}, {extra: api}) => {
      const {data: user} = await api.post<UserData>(APIRoutes.Signup, {username,email, password});
      return user;
    },
  );

export const createAssembly = createAsyncThunk<Assembly, Assembly, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/createAssembly',
    async (assembly, { extra: api}) => {
      const {data: assemblyCreated} = await api.post<Assembly>(APIRoutes.Assembly,
        assembly);
      return assemblyCreated;
    },
  );

export const deleteAssembly = createAsyncThunk<Assembly, Assembly, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deleteAssembly',
  async (assembly, { extra: api}) => {
    await api.delete<Assembly>(`${APIRoutes.Assembly }/${ assembly.id}`);
    return assembly;
  },
);

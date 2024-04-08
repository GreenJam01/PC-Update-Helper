export const BASE_URL = 'http://localhost:8081/';
export const TIME_OUT = 5000;

export enum AppData{
    Auth = 'auth',
    Hardware = 'hardware',
    Assemblies = 'assemblies',
    Favorites = 'favorites',
}

export enum AppRoutes {
    Signin = '/signin',
    Signup = '/signup',
    Main = '/',
    ScanPage = '/scan-page',
    MyAssembliesPage = '/my-assemblies',
    AssemblePage = '/assemble',
    UpgradePage = '/upgrade',
    HardwaresPage = '/hardwares',
    InfoPage = '/infopage',
    CreatePage = '/create',
    FavoritesPage = '/favorites',
}

export enum APIRoutes {
    Assembly = '/assemblies',
    PostRAM = '/hardware/post-ram',
    PostRAMList = '/hardware/post-ram-list',
    PostMotherboard = '/hardware/post-motherboard',
    PostMotherboardList = '/hardware/post-motherboard-list',
    PostHDD = '/hardware/post-hdd',
    PostHDDList = '/hardware/post-hdd-list',
    PostGPU = '/hardware/post-gpu',
    PostGPUList = '/hardware/post-gpu-list',
    PostCPU = '/hardware/post-cpu',
    PostCPUList = '/hardware/post-cpu-list',
    GetAllRAM = '/hardware/get-all-ram',
    GetAllMotherboard = '/hardware/get-all-motherboard',
    GetAllHDD = '/hardware/get-all-hdd',
    GetAllGPU = '/hardware/get-all-gpu',
    GetAllCPU = '/hardware/get-all-cpu',
    GetAllSSD = '/hardware/get-all-ssd',
    Signup = '/api/auth/signup',
    Signin = '/api/auth/signin',
    Signout = 'api/auth/signout'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
    Authorized = 'Authorized',
  }

export const HARDWARES = {
  cpu: 'cpu',
  gpu: 'gpu',
  ram: 'ram',
  motherboard: 'motherboard',
  hdd: 'hdd'
};

import React, { useEffect } from 'react';
import './common.css';
import './adaptive.css';
import { Navigate, Route, Routes} from 'react-router-dom';
import { IndexPage } from './pages/index/IndexPage';
import { UpgradePage } from './pages/upgrade/UpgradePage';
import { AssemblePage } from './pages/assemble/AssemblePage';
import { ScanPage } from './pages/scan-page/ScanPage';
import { MyAssembliesPage } from './pages/my-assemblies/MyAssembliesPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/Signup/Signup';
import { HardwaresPage } from './pages/hardwares/HardwaresPage';
import { AppRoutes, HARDWARES } from './constants';
import { InfoPage } from './pages/scan-page/InfoPage';
import { getToken } from './services/token';
import { checkAuthAction } from './store/api-actions';
import { CreatePage } from './pages/create/CreatePage';
import { useAppSelector } from './hooks/use-app';
import { hardwaresSelectors } from './slices/hardwareSlice';


function App() {
  const token = getToken();
  useEffect(() => {
    if (token){
      checkAuthAction();
    }
  }, [token]);
  const cpus = useAppSelector(hardwaresSelectors.cpu);
  const gpus = useAppSelector(hardwaresSelectors.gpu);
  const rams = useAppSelector(hardwaresSelectors.ram);
  const motherboards = useAppSelector(hardwaresSelectors.motherboard);
  const hdds = useAppSelector(hardwaresSelectors.hdd);
  return (
    <Routes>
      <Route path = {AppRoutes.Main}>
        <Route index element={<IndexPage/>}/>
        <Route path = {AppRoutes.UpgradePage} element={<UpgradePage/>}/>
        <Route path={AppRoutes.AssemblePage} element = {<AssemblePage/>}/>
        <Route path= {AppRoutes.ScanPage} element = {<ScanPage/>}/>
        <Route path = {AppRoutes.MyAssembliesPage} element = {<MyAssembliesPage/>}/>
        <Route path = {AppRoutes.InfoPage} element = {<InfoPage/>}/>
        <Route path={AppRoutes.Signin} element = {<SigninPage/>}/>
        <Route path={AppRoutes.Signup} element = {<SignupPage/>}/>
        <Route >
          <Route index path={AppRoutes.HardwaresPage}
            element = {<Navigate to ={`${AppRoutes.HardwaresPage}/${HARDWARES.cpu}`}/>}
          />
          <Route path={`${AppRoutes.HardwaresPage}/${HARDWARES.cpu}`} element = {<HardwaresPage hardwares={cpus} />}/>
          <Route path={`${AppRoutes.HardwaresPage}/${HARDWARES.gpu}`} element = {<HardwaresPage hardwares={gpus}/>}/>
          <Route path={`${AppRoutes.HardwaresPage}/${HARDWARES.hdd}`} element = {<HardwaresPage hardwares={hdds}/>}/>
          <Route path={`${AppRoutes.HardwaresPage}/${HARDWARES.ram}`} element = {<HardwaresPage hardwares={rams}/>}/>
          <Route path={`${AppRoutes.HardwaresPage}/${HARDWARES.motherboard}`} element = {<HardwaresPage hardwares={motherboards}/>}/>

        </Route>
        <Route path = {AppRoutes.CreatePage} element = {<CreatePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;

import React, { useEffect } from 'react';
import './common.css';
import './adaptive.css';
import { Route, Routes} from 'react-router-dom';
import { IndexPage } from './pages/index/IndexPage';
import { UpgradePage } from './pages/upgrade/UpgradePage';
import { AssemblePage } from './pages/assemble/AssemblePage';
import { ScanPage } from './pages/scan-page/ScanPage';
import { MyAssembliesPage } from './pages/my-assemblies/MyAssembliesPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/Signup/Signup';
import { HardwaresPage } from './pages/hardwares/Hardwares';
import { AppData, AppRoutes } from './constants';
import { InfoPage } from './pages/scan-page/InfoPage';
import { getToken } from './services/token';
import { checkAuthAction } from './store/api-actions';
import { CreatePage } from './pages/create/CreatePage';


function App() {
  const token = getToken();
  useEffect(() => {
    if (token){
      checkAuthAction();
    }
  }, [token]);
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
        <Route path={AppRoutes.HardwaresPage} element = {<HardwaresPage/>}/>
        <Route path = {AppRoutes.CreatePage} element = {<CreatePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;

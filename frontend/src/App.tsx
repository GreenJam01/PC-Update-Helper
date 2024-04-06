import React from 'react';
import "./common.css"
import "./adaptive.css"
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {router} from "./data/routers";
import { IndexPage } from './pages/index/IndexPage';
import { UpgradePage } from './pages/upgrade/UpgradePage';
import { AssemblePage } from './pages/assemble/AssemblePage';
import { ScanPage } from './pages/scan-page/ScanPage';
import { MyAssembliesPage } from './pages/my-assemblies/MyAssembliesPage';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import { HardwaresPage } from './pages/hardwares/Hardwares';
import { AppRoutes } from './constants';
import { InfoPage } from './pages/scan-page/InfoPage';



function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Menu/>  */}
      <Routes>
        <Route path = "/">
          <Route index element={<IndexPage/>}/>
          <Route path = {AppRoutes.UpgradePage} element={<UpgradePage/>}/>
          <Route path={AppRoutes.AssemblePage} element = {<AssemblePage/>}/>
          <Route path= {AppRoutes.ScanPage} element = {<ScanPage/>}/>
          <Route path = {AppRoutes.MyAssembliesPage} element = {<MyAssembliesPage/>}/>
          <Route path = {AppRoutes.InfoPage} element = {<InfoPage/>}/>
          <Route path={AppRoutes.Login} element = {<LoginPage/>}/>
          <Route path={AppRoutes.Register} element = {<RegisterPage/>}/>
          <Route path={AppRoutes.HardwaresPage} element = {<HardwaresPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  {/* <RouterProvider router={router}/> */}
  </>
  )
}

export default App;

import React from 'react';
import "./common.css"
import "./adaptive.css"
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {router} from "./data/routers";
import Menu from "./components/menu/Menu"
import { IndexPage } from './pages/index/IndexPage';
import { UpgradePage } from './pages/upgrade/UpgradePage';
import { AssemblePage } from './pages/assemble/AssemblePage';
import { ScanPage } from './pages/scan-page/ScanPage';
import { MyAssembliesPage } from './pages/my-assemblies/MyAssembliesPage';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';



function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    
      <Routes>
        <Route path = "/app/">
          <Route index element={<IndexPage/>}/>
          <Route path = "/app/upgrade" element={<UpgradePage/>}/>
          <Route path="/app/assemble" element = {<AssemblePage/>}/>
          <Route path= "/app/scan" element = {<ScanPage/>}/>
          <Route path = "/app/myassemblies" element = {<MyAssembliesPage/>}/>
          <Route path = "/app/infopage" element = {<LoginPage/>}/>
          <Route path="/app/login" element = {<LoginPage/>}/>
          <Route path="/app/register" element = {<RegisterPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  {/* <RouterProvider router={router}/> */}
  </>
  )
}

export default App;

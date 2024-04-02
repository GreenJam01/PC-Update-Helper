import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./adaptive.css";
import "./common.css";
import Menu from "./components/menu/Menu";
import { AssemblePage } from './pages/assemble/AssemblePage';
import { DatasetViewPage } from "./pages/dataset-view/DatasetViewPage";
import { HardwaresPage } from './pages/hardwares/Hardwares';
import { IndexPage } from './pages/index/IndexPage';
import LoginPage from './pages/login/Login';
import { MyAssembliesPage } from './pages/my-assemblies/MyAssembliesPage';
import RegisterPage from './pages/register/Register';
import { ScanPage } from './pages/scan-page/ScanPage';
import { UpgradePage } from './pages/upgrade/UpgradePage';

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
          <Route path="/app/hardwares" element = {<HardwaresPage/>}/>
          <Route path="/app/dataset-view" element = {<DatasetViewPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  {/* <RouterProvider router={router}/> */}
  </>
  )
}

export default App;

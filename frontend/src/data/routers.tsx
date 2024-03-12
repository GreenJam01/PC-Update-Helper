import {createBrowserRouter} from "react-router-dom";
import {IndexPage} from "../pages/index/IndexPage";
import {AssemblePage} from "../pages/assemble/AssemblePage";
import {UpgradePage} from "../pages/upgrade/UpgradePage";
import {CreatePage} from "../pages/create/CreatePage";
import {ScanPage} from "../pages/scan-page/ScanPage";
import { MyAssembliesPage } from "../pages/my-assemblies/MyAssembliesPage";
import { InfoPage } from "../pages/scan-page/InfoPage";
import LoginPage from "../pages/login/Login";
import RegisterPage from "../pages/register/Register"
import { HardwaresPage } from "../pages/hardwares/Hardwares";

export const router = createBrowserRouter([
    {
        path: "/app/",
        element: <IndexPage/>
    },
    {
        path: "/app/upgrade",
        element: <UpgradePage/>,
    },
    {
        path: "/app/assemble",
        element: <AssemblePage/>,
    },
    {
        path: "/app/scan",
        element: <ScanPage/>,
    },
    {
        path: "/app/create",
        element: <CreatePage/>,
    },
    {
        path: "/app/myassemblies",
        element: <MyAssembliesPage/>
    },
    {
        path: "/app/infopage",
        element: <InfoPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/hardwares",
        element: <HardwaresPage/>
    }
]);
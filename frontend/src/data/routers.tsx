import { createBrowserRouter } from "react-router-dom";
import { AssemblePage } from "../pages/assemble/AssemblePage";
import { CreatePage } from "../pages/create/CreatePage";
import { DatasetViewPage } from "../pages/dataset-view/DatasetViewPage";
import { HardwaresPage } from "../pages/hardwares/Hardwares";
import { IndexPage } from "../pages/index/IndexPage";
import LoginPage from "../pages/login/Login";
import { MyAssembliesPage } from "../pages/my-assemblies/MyAssembliesPage";
import RegisterPage from "../pages/register/Register";
import { InfoPage } from "../pages/scan-page/InfoPage";
import { ScanPage } from "../pages/scan-page/ScanPage";
import { UpgradePage } from "../pages/upgrade/UpgradePage";

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
    },
    {
        path: "/dataset-view",
        element: <DatasetViewPage/>,
    }
]);
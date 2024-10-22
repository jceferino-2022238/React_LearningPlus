import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { DashboardPageAdmin } from "./pages/dashboardAdmin/DashboardPageAdmin";
import { DashboardPageEditor } from "./pages/dashboardEditor/DashboardPageEditor";
import { NotFound } from "./components/NotFound";
import { Unauthorized } from "./components/Unauthorized";
const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '*', element: <NotFound/>},
    {path: '/unauthorized', element: <Unauthorized/>},
    {
        path: '/dashboard',
        element: <DashboardPage/>
    },
    {
        path: '/dashboard/admins',
        element: <DashboardPageAdmin/>
    },
    {
        path: '/dashboard/editor',
        element: <DashboardPageEditor/>
    }
]
export default routes;
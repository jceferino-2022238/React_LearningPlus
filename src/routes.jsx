import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
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
        path: '/dashboardAdmins'
    },
    {
        path: '/dashboardEditor'
    }
]
export default routes;
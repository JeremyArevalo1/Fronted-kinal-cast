import { DashboardPage } from "./pages/dashboard";
import { Auth } from "./pages/auth/Auth";

const routes = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashboardPage/>}
]

export default routes
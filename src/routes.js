import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layout/Dashboard'
//pages
import HomePage from "./pages/Homepage/HomePage"
import MetakulCollection from './pages/Explore/MetakulCollection';
import StakingPage from "./pages/NFTStaking"
import BlogPage from "./pages/Blogs"
export default function Router() {

    const routes = useRoutes([
        {
            path: '/', 
            element:<DashboardLayout />,
            children:[
                { path: '', element: <HomePage /> },
                { path: 'metakul', element: <MetakulCollection /> },
                { path: 'Staking', element: <StakingPage /> },
                { path: 'blogs', element: <BlogPage /> },
            ]
        },
    ]);

    return routes;
}
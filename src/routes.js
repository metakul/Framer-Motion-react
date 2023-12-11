import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layout/Dashboard'
//pages
import HomePage from "./pages/Homepage/HomePage"
import MetakulCollection from './pages/Explore/MetakulCollection';
import StakingPage from "./pages/NFTStaking"
import BlogPage from "./pages/Blogs"
import SingleBlogPost from './pages/Blogs/SingleBlog';
import Mywallet from './pages/OwnerNFt';
import KYCPage from './pages/KycPage';
import Career from './pages/Career';

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
                { path: 'singleBlog/:id', element: <SingleBlogPost /> },
                { path: 'kyc', element: <KYCPage /> },
                { path: 'career', element: <Career /> },
                { path: 'wallet', element: <Mywallet /> },
            ]
        },
    ]);

    return routes;
}
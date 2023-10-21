//TODO: import protect and public routes 
//Do later when doing auth

// Uncomment these later: 
// import {useRoutes} from 'react-router-dom' 
// import {protectedRoutes} from './protected'; 
// import {publicroutes} from './public'; 
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Header from "../components/Elements/Header/Header";
import Profile from "../components/Layout/Profile/Profile"
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <Error />,
        children: [
            {
                path: "/dashboard",
                element: <div>dashboard</div>,
            },
            {
                path: "/profile/:profileId",
                element: <Profile />,
            },
            {
                path: "/manga/:mangaId",
                element: <div>Manga</div>,
            },
            {
                path: "/setting",
                element: <div>Configure Buncha Settings</div>,
            }
        ]
    }
]);

export const AppRoutes = () => {
    return(
        <RouterProvider router={router} />
    )
}

// From Bulletproof react: 

// import { useRoutes } from 'react-router-dom';

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

// export const AppRoutes = () => {
//     const auth = useAuth();

//     const commonRoutes = [{ path: '/', element: <Landing /> }];

//     const routes = auth.user ? protectedRoutes : publicRoutes;

//     const element = useRoutes([...routes, ...commonRoutes]);

//     return <>{element}</>;
// };
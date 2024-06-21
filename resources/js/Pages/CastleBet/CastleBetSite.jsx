import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Welcome from './Welcome';
import Group from './Group';
import ErrorPage from './ErrorPage';
import Root from './Root';
import Bets from './screens/Bets';
import Profile from './screens/Profile';
import GameScreen from './screens/GameScreen';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import { SwarmContextProvider } from '@/Context/SwarmDataContext';
import { AuthUserContextProvider } from '@/Context/UserAuthenticationContext';
import { EventContextProvider } from '@/Context/EventsCatchContext';
import { StoreTempContextProvider } from '@/Context/DataStoreTemp';


const router = createBrowserRouter([
    {
        path: "/castle-site",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/castle-site",
                element: <Welcome />,
            },
            {
                path: "/castle-site/group",
                element: <Group />,
            },
            {
                path: "/castle-site/game",
                element: <GameScreen />,
            },
            {
                path: "/castle-site/my-bets",
                element: <Bets />,
            },
            {
                path: "/castle-site/my-account",
                element: <Profile />,
            },
            {
                path: "/castle-site/login",
                element: <Login />,
            },
            {
                path: "/castle-site/join-now",
                element: <Register />,
            },
            {
                path: "/castle-site/password-reset",
                element: <div>reset password</div>,
            },
        ],
    },
]);

function CastleBetSite() {
    return (
        <React.StrictMode>
            <SwarmContextProvider>
                <AuthUserContextProvider>
                    <EventContextProvider>
                        <StoreTempContextProvider>
                            <RouterProvider router={router} />
                        </StoreTempContextProvider>
                    </EventContextProvider>
                </AuthUserContextProvider>
            </SwarmContextProvider>
        </React.StrictMode>
    );
}

export default CastleBetSite;

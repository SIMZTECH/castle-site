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
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Welcome />,
            },
            {
                path: "/group",
                element: <Group />,
            },
            {
                path: "/game",
                element: <GameScreen />,
            },
            {
                path: "/my-bets",
                element: <Bets />,
            },
            {
                path: "/my-account",
                element: <Profile />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/join-now",
                element: <Register />,
            },
            {
                path: "/password-reset",
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

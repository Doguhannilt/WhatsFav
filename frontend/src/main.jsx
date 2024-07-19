import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import {
    Provider,
    useSelector
} from 'react-redux';
import {
    Route,
    RouterProvider,
    createRoutesFromElements
} from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Login from './pages/Auth/Login.jsx';
import Movies from './pages/Movies/Movies.jsx';
import Profile from './pages/User/Profile.jsx';
import Contact from './pages/Contact/Contact.jsx';

// AuthWrapper Component
const AuthWrapper = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const routes = createRoutesFromElements(

        <Route
            path='/'
            element={<App />}
        >
            <Route
                index={true}
                path='/'
                element={<Home />}
            />
            <Route
                path='/signup'
                element={<Signup />}
            />
            <Route
                path='/login'
                element={<Login />}
            />

            {userInfo ? (
                <>
                    <Route
                        path='/movies'
                        element={<Movies />}
                    />
                    <Route
                        path='/profile'
                        element={<Profile />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact />}
                    />
                </>
            ) : (
                    <Route
                        path='/signup'
                        element={<Signup />}
                    />
            )}

        </Route>
    );

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthWrapper />
    </Provider>
);

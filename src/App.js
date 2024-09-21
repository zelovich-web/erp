import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/SignUp/LoginForm';
import SignInForm from './components/SignIn/SignInForm';
import DashBoard from './components/DashBoard/DashBoard';
import './App.css';
import { LoadingProvider, useLoading } from './components/LoadingContext';
import Loader from './components/Loader';

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);
        
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
            setLoading(false);
        };
    }, [location, setLoading]);

    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/SignInForm" element={<SignInForm />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/" element={isAuthenticated ? <Navigate to="/DashBoard" /> : <Navigate to="/SignInForm" />} />
        </Routes>
    );
};

const App = () => {
    return (
        <LoadingProvider>
            <Router>
                <div className="App">
                    <AppRoutes />
                    <Loader />
                </div>
            </Router>
        </LoadingProvider>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/SignUp/LoginForm';
import MainPage from './components/MainPage/MainPage';
import SignInForm from './components/SignIn/SignInForm';
import DashBoard from './components/DashBoard/DashBoard';

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log('Is authenticated:', isAuthenticated); 
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/SignInForm" element={<SignInForm />} />
                <Route path="/mainPage" element={<MainPage />} />  
                <Route path="/DashBoard" element={<DashBoard />} />  
                  
                <Route path="/" element={isAuthenticated ? <Navigate to="/DashBoard" /> : <Navigate to="/mainPage" />} />
            </Routes>
        </Router>
    );
};

export default App;
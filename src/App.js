import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log('Is authenticated:', isAuthenticated); // Для отладки
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/mainPage" element={<MainPage />} />
                
                {/* Перенаправление на страницу логина, если пользователь не авторизован */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/mainPage" /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
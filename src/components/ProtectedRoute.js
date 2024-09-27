import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    
    // Если пользователь не аутентифицирован, перенаправляем на страницу входа
    if (!isAuthenticated) {
        return <Navigate to="/SignInForm" />;
    }

    // Если пользователя нет или его роль не разрешена, также перенаправляем на несанкционированную страницу
    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
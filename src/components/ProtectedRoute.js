import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    
    if (!isAuthenticated) {
        return <Navigate to="/SignInForm" />;
    }

    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
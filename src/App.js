import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInForm from './components/SignIn/SignInForm';
import DashBoard from './components/DashBoard/DashBoard';
import UnauthorizedPage from './components/UnauthorizedPage';
import './App.css';
import { LoadingProvider, useLoading } from './components/LoadingContext';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import StudentDashBoard from './components/StudentDashBoard/StudentDashBoard';
import TeacherDashBoard from './components/TeacherDashBoard/TeacherDashBoard';
import AccountManager from './components/AccountManager/AccountManager'
import AccountManagerDashBoard from './components/AccountManagerDashBoard/AccountManagerDashBoard'
import EditUser from './components/EditUser/EditUser';
import UniversalModal from './components/UniversalModal/UniversalModal';
import DeleteUser from './components/DeleteUserModal/DeleteUserModal';



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
            <Route 
                path="/AdminDashBoard" 
                element={
                    <ProtectedRoute allowedRoles={['admin']}>
                        <AdminDashBoard />
                    </ProtectedRoute>
                } 
            />
             <Route 
                path="/StudentDashBoard" 
                element={
                    <ProtectedRoute allowedRoles={['student']}>
                        <StudentDashBoard />
                    </ProtectedRoute>
                } 
            />
             <Route 
                path="/TeacherDashBoard" 
                element={
                    <ProtectedRoute allowedRoles={['teacher']}>
                        <TeacherDashBoard />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/AccountManagerDashBoard" 
                element={
                    <ProtectedRoute allowedRoles={['account-managerDashBoard']}>
                        <AccountManagerDashBoard />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/AccountManager" 
                element={
                    <ProtectedRoute allowedRoles={['account-manager']}>
                        <AccountManager />
                    </ProtectedRoute>
                } 
            />
            
            <Route path="/SignInForm" element={<SignInForm />} />
            <Route path="/EditUser" element={<EditUser />} />
            <Route path="/UniversalModal" element={<UniversalModal />} />
            <Route path="/DeleteUser" element={<DeleteUser />} />



            <Route 
                path="/DashBoard" 
                element={
                    <ProtectedRoute allowedRoles={['admin', 'teacher', 'student', 'account-manager', 'account-managerDashBoard']}>
                        <DashBoard />
                    </ProtectedRoute>
                } 
            />
            <Route path="/" element={isAuthenticated ? <Navigate to="/DashBoard" /> : <Navigate to="/SignInForm" />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
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
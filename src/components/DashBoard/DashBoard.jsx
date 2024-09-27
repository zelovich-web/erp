import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import TeacherDashBoard from '../TeacherDashBoard/TeacherDashBoard';
import StudentDashBoard from '../StudentDashBoard/StudentDashBoard';
import User from '../User';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const role = user?.role;
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
};
  const renderContent = () => {
    switch (role) {
      case 'admin':
        return <AdminDashBoard />; 
      case 'teacher':
        return <TeacherDashBoard />; 
      case 'student':
        return <StudentDashBoard />;
      case 'user':
        return <User />
      default:
        return <div>У вас нет доступа к этому разделу.</div>;
    }
  };

  return (
    <div>
      <h1>Личный кабинет</h1>
      {renderContent()}
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};


export default Dashboard;
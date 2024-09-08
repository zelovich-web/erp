import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


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
        return <AdminDashboard />; 
      case 'teacher':
        return <TeacherDashboard />; 
      case 'student':
        return <StudentDashboard />;
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

const AdminDashboard = () => <div>Здесь находятся функции для администратора.</div>;
const TeacherDashboard = () => <div>Здесь находятся функции для учителя.</div>;
const StudentDashboard = () => <div>Здесь находятся функции для студента.</div>;

export default Dashboard;
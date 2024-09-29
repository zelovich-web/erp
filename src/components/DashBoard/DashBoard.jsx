import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import TeacherDashBoard from '../TeacherDashBoard/TeacherDashBoard';
import StudentDashBoard from '../StudentDashBoard/StudentDashBoard';
import User from '../User';
import styles from './DashBoard.module.css'
import logo from '..//../assets/firstBlockLogo.svg'
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
      <div className={styles.DashBoardWrapper}>
        <div className={styles.DashBoardAside}>
        <img className={styles.DashBoardLogo} src={logo} alt="logo" />
        <ul className={styles.DashBoardNav}><p>Innodom ERP</p>
          <li className={styles.li1}>Ученики </li>
          <li className={styles.li2}>Группы</li>
          <li className={styles.li3}>Преподаватели</li>
          <li className={styles.li4}>Задания</li>
          <li className={styles.li5}>Награды</li>
          <li className={styles.li6}>Заявки на <br /> получение наград</li>
          <li className={styles.li7}>Аналитика</li>
          <li className={styles.li8}>Настройки</li>
        </ul>

        </div>
        <div className={styles.DashBoardMainSide}>
        {renderContent()}
        
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
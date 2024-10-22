import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import TeacherDashBoard from '../TeacherDashBoard/TeacherDashBoard';
import StudentDashBoard from '../StudentDashBoard/StudentDashBoard';
import AccountManagerDashBoard from '../AccountManagerDashBoard/AccountManagerDashBoard';
import styles from './DashBoard.module.css'
import logo from '..//../assets/firstBlockLogo.svg'
import backArrow from '../../assets/Back Arrow.png'
import arrowLeft from '..//../assets/arrowLeft.svg'
import arrowRight from '..//../assets/arrowRight.svg'
import calendar from '..//../assets/calendar.svg'
import notifcon from '..//../assets/Notifcon.svg'
import arrowDown from '..//../assets/arrowDown.svg'
import logout from '..//../assets/logout.svg'
import glare from '..//../assets/glare.svg'
import duga1 from '..//../assets/duga1.svg'
import duga2 from '..//../assets/duga2.svg'



const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const role = user?.role;
  const userName = user?.username;
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
};
  const [activeMenu, setActiveMenu] = useState(0)
  const handleMenuChange = (menuIndex) => {
    setActiveMenu(menuIndex)
  }
  const [date, setDate] = useState(new Date())
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  




  const renderContent = () => {
    switch (role) {
      case 'admin':
        return <AdminDashBoard activeMenu={activeMenu} setActiveMenu={setActiveMenu} />; 
      case 'teacher':
        return <TeacherDashBoard />; 
      case 'student':
        return <StudentDashBoard />;
      case 'account-manager':
        return <AccountManagerDashBoard />
      default:
        return <div>У вас нет доступа к этому разделу.</div>;
    }
  };

  return (
    <div>
      <div className={styles.DashBoardWrapper}>
            <div className={styles.DashBoardAside}>
              <img className={styles.duga1} src={duga1} alt="" />
              <img className={styles.duga2} src={duga2} alt="" />
              <img className={styles.glare} src={glare} alt="" />
              <img className={styles.DashBoardLogo} src={logo} alt="logo" />
                <ul className={styles.DashBoardNav}><p> INNODOM ERP</p>
                    <li className={styles.li1}>Ученики </li>
                    <li className={styles.li2}>Группы</li>
                    <li className={styles.li3}>Преподаватели</li>
                    <li className={styles.li4}>Задания</li>
                    <li className={styles.li5}>Награды</li>
                    <li className={styles.li6}>Заявки на <br /> получение наград</li>
                    <li className={styles.li7}>Аналитика</li>
                    <li className={styles.li8}>Настройки</li>
                    
                </ul>
                <img className={styles.logout} onClick={handleLogout} src={logout} alt="выйти" />
            </div>
            
        <div className={styles.DashBoardMainSide}>

        <div className={styles.DashBoardHeaderItems}>
            <img className={styles.BackArrow} src={backArrow} alt="back" />
            <div className={styles.DashBoardСalendar}>
              <img style={{cursor:'pointer'}} src={arrowLeft} alt="" />
              <img style={{cursor:'pointer'}} src={calendar} alt="" />
               <p>{formatDate(date)}</p>
              <img style={{cursor:'pointer'}} src={arrowRight} alt="" />
            </div>
            <input src={arrowLeft} placeholder='Поиск' className={styles.DashBoardInputSearch} type="text" />
              <div className={styles.DashBoardProfile}>
                <div className={styles.DashBoardProfileAvatar}></div>
                <p>{userName}</p>
                <img className={styles.notifcon} src={notifcon} alt="" />
                <img style={{cursor:'pointer'}} src={arrowDown} alt="" />
              </div>
        </div>
        <div className={styles.renderContent}>
        {renderContent()}
        </div>
        
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
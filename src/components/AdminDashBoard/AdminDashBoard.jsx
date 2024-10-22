import React, { useState } from "react";
import styles from './AdminDashBoard.module.css'
import fakeUsers from "../../fakeDataBase";

const AdminDashBoard = ({activeMenu, setActiveMenu}) => {


    const [adminType, setAdminType] = useState("superAdmin");
    const admins = fakeUsers.filter(user => user.role === 'admin');
    const managers = fakeUsers.filter(user => user.role === 'account-manager');
    
    console.log(managers);
    
    return(
        <>
        
        <div className={styles.AdminDashBoardWrapper}>
        <div className={styles.AdminDashBoardPossibilities}>
                <p 
                    onClick={() => setActiveMenu(0)} 
                    className={`${styles.AdminDashBoardSwitches} ${activeMenu === 0 ? styles.active : ''}`}
                >
                    Регистрация нового <br /> супер админа
                </p>
                <p 
                    onClick={() => setActiveMenu(1)} 
                    className={`${styles.AdminDashBoardSwitches} ${activeMenu === 1 ? styles.active : ''}`}
                >
                    Регистрация нового <br /> аккаунт - менеджера
                </p>
                <p 
                    onClick={() => setActiveMenu(2)} 
                    className={`${styles.AdminDashBoardSwitches} ${activeMenu === 2 ? styles.active : ''}`}
                >
                    Cписок <br />
                    администраторов
                </p>
            </div>
           {activeMenu === 0 && (
             <form className={styles.AdminDashBoardForm} action="">
                <label className={styles.FIO}>ФИО*</label>
             <input placeholder="Введите ФИО" type="text" />
             
                <label className={styles.login}>Логин*</label>

             <input placeholder='Введите логин для супер админа' type="text" />
                <label className={styles.password}>Пароль*</label>

             <input placeholder='Введите пароль для супер админа' type="password" />
             <button>Зарегистрировать</button>
         </form>
           )}
            {activeMenu === 1 && (
              <form className={styles.AdminDashBoardForm} action="">
              <label className={styles.FIO}>ФИО*</label>
           <input placeholder="Введите ФИО" type="text" />
              <label className={styles.login}>Логин*</label>

           <input placeholder='Введите логин для супер админа' type="text" />
           <label className={styles.tg}>Ник ТГ*</label>

           <input placeholder='Имя пользователя в телеграмм' type="text" />
              <label className={styles.password2}>Пароль*</label>

           <input placeholder='Введите пароль для супер админа' type="password" />
             <button>Зарегистрировать </button>
         </form>
           )}
            {activeMenu === 2 && (
             <div className={styles.AdminDashBoardAdminList}>
                <div className={styles.AdminDashBoardSwitch}>
                    <div onClick={() => setAdminType("superAdmin")} className={`${styles.AdminDashBoardSuperAdmin } ${adminType === 'superAdmin' ? styles. switchActive: ''}`}>
                        <p>Суперадминистраторы</p>
                    </div>
                    <div onClick={() => setAdminType("accountManager")} className={`${styles.AdminDashBoardAccMng} ${adminType === 'accountManager' ? styles. switchActive: ''}`}>
                        <p>Аккаунт-менеджеры</p>
                    </div>
                </div>
                {adminType === 'superAdmin' ? (
                    <div className={styles.AdminDashBoardListTable}>
                        {admins.map(admins => (
                            <li key={admins.id}>{admins.id}.{admins.username}</li>
                        ))}
                    </div>
                ) : adminType === 'accountManager' ? (

                    <div className={styles.AdminDashBoardListTable}>
                        {managers.map(managers => (
                            <li key={managers.id}>{managers.id}.{managers.username}</li>
                        ))}
                    </div>
            ) : null}
             </div>
           )}
           
        </div>

        
    </>
        
    )
}


export default AdminDashBoard;
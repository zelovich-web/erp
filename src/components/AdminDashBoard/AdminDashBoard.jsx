import React, { useState } from "react";
import styles from './AdminDashBoard.module.css'
import fakeUsers from "../../fakeDataBase";
import { addUser } from "../../fakeDataBase";
import eye from '../../assets/Eye.svg'
import closedEye from '..//..//assets/Closed Eye.svg'
import printer from '../../assets/printer.svg'
import edit from './../../assets/edit form.svg'
import deleteIcon from '../../assets/delete 2.svg'
import EditUser from "../EditUser/EditUser";
import DeleteUserModal from '../DeleteUserModal/DeleteUserModal'

const AdminDashBoard = ({activeMenu, setActiveMenu}) => {
    

    const [adminType, setAdminType] = useState("superAdmin");
    const [admins, setAdmins] = useState(fakeUsers.filter(user => user.role === 'admin'));
    const [managers, setManagers] = useState(fakeUsers.filter(user => user.role === 'account-manager'));
    const [adminName, setAdminName] = useState('')
    const [adminLogin, setAdminLogin] = useState('')
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [managerName, setManagerName] = useState('')
    const [managerLogin, setManagerLogin] = useState('')
    const [managerPassword, setManagerPassword] = useState('')
    const [managerTg, setManagerTg] = useState('') 
    const [managerEmail, setManagerEmail] = useState('')
    const [error, setError] = useState('');
    const [errorManager, setErrorManager] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordManager, setShowPasswordManager] = useState(false);
    const [openEditUser, setOpenEditUser] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
    
    

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const toggleShowPasswordManager = () => {
        setShowPasswordManager(!showPasswordManager)
    }


    const isFormValid = () => {
        return adminName !== '' && adminPassword !== '' && adminLogin !== '' && adminEmail;
    };

    const isFormValidManager = () => {
        return managerName !== '' && managerPassword !== '' && managerPassword !== '' && managerEmail;
    }


    const registerNewAdmin = (e) => {
        e.preventDefault();


        const newAdmin = {
            fio: adminName,
            username: adminLogin,
            password: adminPassword,
            role: 'admin',
            fio: adminName,
            email: adminEmail,
        }
        try {
            addUser(newAdmin);
            setAdminName('');
            setAdminLogin('');
            setAdminPassword('');
            setError('');
            setAdminEmail('')
            console.log('Администратор успешно добавлен!', newAdmin);
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
        };

    const registerNewManager = (e) => {
        e.preventDefault();

        const newManager = {
            fio: managerName,
            username: managerLogin,
            password: managerPassword,
            tg: managerTg ,
            email: managerEmail,
            role: 'account-manager',
        }
        try {
            addUser(newManager);
            setManagerName('');
            setManagerLogin('');
            setManagerPassword('');
            setManagerTg('')
            setManagerEmail('');
            setErrorManager('');
            console.log('Аккаунт-Менеджер успешно добавлен!', newManager);
        } catch (error) {
            setErrorManager(error.message);
            console.error(error);
        }
        };

        const handleOpenEditUser = (user) => {
            setSelectedUser(user);
            setOpenEditUser(true)
        }

        const handleCloseEditUser = () => {
            setOpenEditUser(false)
        }

        const handleDeleteUserModal = ({ userId, userType, fio }) => {
            setSelectedUser({ userId, userType, fio });
            setOpenDeleteUserModal(true);
        };

        const handleDeleteUserModalClose = () => {
            setOpenDeleteUserModal(false)
        }

        const handleDeleteUser = (id, type) => {
            if (type === 'superAdmin') {
                setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== id));
            } else if (type === 'accountManager') {
                setManagers(prevManagers => prevManagers.filter(manager => manager.id !== id));
            }
        };

    return(
        <>
        
        <div className={styles.AdminDashBoardWrapper}>
        <div className={styles.AdminDashBoardPossibilities}>
                <p 
                    onClick={() => setActiveMenu(0)} 
                    className={`${styles.AdminDashBoardSwitches} ${activeMenu === 0 ? styles.active : ''}`}
                >
                    Регистрация нового <br /> супер администратора
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
             <form onSubmit={registerNewAdmin} className={styles.AdminDashBoardForm} action="">
                <label className={styles.FIO}>ФИО*</label>
                    <input value={adminName}  onChange={e => setAdminName(e.target.value)} placeholder="Введите ФИО" type="text" />
                <label className={styles.login}>Логин*</label>
                    <input value={adminLogin} onChange={e => setAdminLogin(e.target.value)} placeholder='Введите логин для супер-администратора' type="text" />
                <label className={styles.email}>Email*</label>
                    <input value={adminEmail} onChange={e => setAdminEmail(e.target.value)} placeholder='Введите email для супер-администратора' type="text" />
                <label className={styles.password}>Пароль*</label>
                    <input type={showPassword ? 'text' : 'password'} value={adminPassword} onChange={e => setAdminPassword(e.target.value)} placeholder='Введите пароль для супер-администратора' />
                    <img onClick={toggleShowPassword} className={styles.eyePass} src={showPassword ? eye : closedEye} alt="" />
                    
                    <p style={{color:'red'}}>{error}</p>
             <button   disabled={!isFormValid()}  className={isFormValid() ? styles.AdminDashBoardBtn : styles.disabledButton}>Зарегистрировать</button>
         </form>
           )}
            {activeMenu === 1 && (
              <form onSubmit={registerNewManager} className={styles.AdminDashBoardForm} action="">
              <label className={styles.FIO}>ФИО*</label>
                <input value={managerName} onChange={e => setManagerName(e.target.value)} placeholder="Введите ФИО" type="text" />
              <label className={styles.login}>Логин*</label>
                <input value={managerLogin} onChange={e => setManagerLogin(e.target.value)} placeholder='Введите логин для аккаунт-менеджера' type="text" />
              <label className={styles.tg}>Ник ТГ*</label>
                <input value={managerTg} onChange={e => setManagerTg(e.target.value)} placeholder='Имя пользователя в телеграмм' type="text" />
              <label className={styles.email2}>Email*</label>
                <input value={managerEmail} onChange={e => setManagerEmail(e.target.value)} placeholder='Имя email для аккаунт-менеджера' type="text" />
              <label  className={styles.password2}>Пароль*</label>
                <input type={showPasswordManager ? 'text' : 'password'} value={managerPassword} onChange={e => setManagerPassword(e.target.value)} placeholder='Введите пароль для аккаунт-менеджера' />
                <img onClick={toggleShowPasswordManager} className={styles.eyePassManager} src={showPasswordManager ? eye : closedEye} alt="" />
                <p style={{color:'red'}}>{errorManager}</p>
             <button disabled={!isFormValidManager()}  className={isFormValidManager() ? styles.AdminDashBoardBtn : styles.disabledButton}>Зарегистрировать</button>
         </form>
           )}
            {activeMenu === 2 && (
             <div className={styles.AdminDashBoardAdmt}>
                <div className={styles.AdminDashBoardSwitch}>
                    <div onClick={() => setAdminType("superAdmin")} className={`${styles.AdminDashBoardSuperAdmin } ${adminType === 'superAdmin' ? styles. switchActive: ''}`}>
                        <p>Суперадминистраторы</p>
                        <img src={printer} alt="" />

                    </div>
                    <div onClick={() => setAdminType("accountManager")} className={`${styles.AdminDashBoardAccMng} ${adminType === 'accountManager' ? styles. switchActive: ''}`}>
                        <p>Аккаунт-менеджеры</p>
                        <img src={printer} alt="" />

                    </div>
                </div>
                {adminType === 'superAdmin' ? (
                    <ul className={styles.AdminDashBoardListTable}>
                        {admins.map(admin => (
                            <li key={admin.id}>{admin.id}. <p>{admin.fio}</p>
                                <div>
                                 <button onClick={() => handleOpenEditUser({ ...admin, type: 'superAdmin' })}>Редактировать <img src={edit} alt="" /></button>
                                 <button onClick={() => handleDeleteUserModal({userId: admin.id, userType: 'superAdmin', fio: admin.fio})}>Удалить <img src={deleteIcon} alt="" /></button>
                             </div>
                            </li>
                            
                        ))}
                    </ul>
                ) : adminType === 'accountManager' ? (

                    <ul className={styles.AdminDashBoardListTable}>
                        {managers.map(manager => (
                            <li key={manager.id}>{manager.id}. <p>{manager.fio}</p>
                             <div>
                              <button onClick={() => handleOpenEditUser({ ...manager, type: 'accountManager' })}>Редактировать <img src={edit} alt="" /></button>
                              <button onClick={() => handleDeleteUserModal({userId: manager.id, userType:'accountManager', fio: manager.fio})}>Удалить <img src={deleteIcon} alt="" /></button>
                             </div>
                            </li>

                            
                        ))}
                    </ul>
            ) : null}
             </div>
           )}
        </div>

        <EditUser isOpen={openEditUser} isClosed={handleCloseEditUser} user={selectedUser}/>
        <DeleteUserModal   handleDeleteUser={handleDeleteUser}  isOpen={openDeleteUserModal} onClose={handleDeleteUserModalClose} userId={handleDeleteUser?.id} userType={handleDeleteUser?.type} fio={handleDeleteUser?.fio} />
    </>
        
    )
}


export default AdminDashBoard;



{/* <button onClick={() => handleDeleteUser(admins.id, 'superAdmin')}>Удалить <img src={deleteIcon} alt="" /></button> */}

import React, { useState, useEffect } from 'react';
import styles from './EditUser.module.css';
import avatar from '..//../assets/avatar.svg'
import UniversalModal from '../UniversalModal/UniversalModal';


const EditUser = ({ isOpen, isClosed, user }) => {
  const modalClass = isOpen ? styles.active : styles.closed;

  const [fio, setFio] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Tg, setTg] = useState('')
  const [openUniversalModal, setOpenUniversalModal] = useState(false)

  useEffect(() => {
    if (user) {
      setFio(user.fio);
      setUserName(user.username);
      setPassword(user.password); 
      setEmail(user.email);
      setTg(user.tg)
    }
  }, [user]);

  const handleSaveChanges = () => {
    console.log({ fio, username, password, email });
    isClosed();
    setOpenUniversalModal(true)
    setTimeout(() => {
      setOpenUniversalModal(false)
    }, 1500);
  };

  return (
    <>
      <div onClick={isClosed} className={modalClass}>
        <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
          <div className={styles.EditUserTitle}>
            <h1>{user && user.type === 'superAdmin' ? 'Персональные данные администратора' : 'Персональные данные аккаунт-менеджера'}</h1>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.EditUserForm}>
            <div className={styles.Fio}>
              <label>ФИО</label>
              <input type="text" value={fio} onChange={(e) => setFio(e.target.value)} /><br />
            </div>
            <div className={styles.Login}>
              <label>Логин</label>
              <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} /><br />
            </div>
              <div className={styles.Password}>
                <label>Пароль</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button>Изменить</button>
              </div>
            <div className={styles.Email}>
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            </div>
            {user && user.type === 'accountManager' ? (
               <div className={styles.Tg}>
                <label>Ник в ТГ</label>
               <input type="text" value={Tg} onChange={(e) => setTg(e.target.value)} /><br />
             </div>
          ) : null}
          </div>
          <button className={styles.btn} onClick={handleSaveChanges}>Сохранить изменения</button>
        </div>
      </div>
      <UniversalModal isOpen={openUniversalModal} />
    </>
  )
}

export default EditUser;
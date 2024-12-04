import React from 'react'
import styles from './DeleteUserModal.module.css'


const DeleteUserModal = ({isOpen, onClose, fio}) => {

  const DeleteUserModalClass = isOpen ? styles.DeleteUserModalContent : styles.closed;
  
  console.log(fio);
  


  return (
    <div className={DeleteUserModalClass}>
      <div className={styles.DeleteUserModal}>
          <h1>Вы действительно хотите удалить
           пользователя {fio} *ФИО пользователя*?!</h1>
            <div className={styles.btns}>
               <button>Да</button>
               <button onClick={onClose}>Нет</button>
            </div>
      </div>

    </div>
  )
}


export default DeleteUserModal;

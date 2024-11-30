import React from 'react'
import styles from './UniversalModal.module.css'
import confirmIcon from '../../assets/confirm.svg'
const UniversalModal = ({isOpen, title, message, icon}) => {
 
  const UniversalModalClass = isOpen ? styles.UniversalModalContent : styles.closed;

  


  return (
   <div className={UniversalModalClass}>
     <div className={styles.UniversalModal}>
      <img src={confirmIcon} alt="" />
      <h1>Изменения сохранены!</h1>
    </div>
   </div>

  )
}

export default UniversalModal
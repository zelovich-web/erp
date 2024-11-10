import React from 'react'
import styles from './AccountManager.module.css'
import logo from '..//../assets/firstBlockLogo.svg'
import studentsIcon from '..//../assets/student.svg'
import groupIcon from '..//../assets/group.svg'
import teacherIcon from '..//../assets/teacher.svg'
import taskIcon from '..//../assets/task.svg'
import medalIcon from '..//../assets/medal.svg'
import penIcon from '..//../assets/pens.svg'
import analiticIcon from '..//../assets/analitik.svg'
import plusIcon from '..//../assets/plus.svg'
import raketa from '..//../assets/raketa.svg'

 const AccountManager = () => {
  return (
    <>
        <div className={styles.AccountManagerWrapper}>
            <img className={styles.raketa} src={raketa} alt="" />
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
               
            </div>
            <div className={styles.AccountManagerContent}>
                    <div className={styles.AccountManagerContentItems}>
                        <p>УЧЕНИКИ</p>
                        <img src={studentsIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <p>ГРУППЫ</p>
                        <img src={groupIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <p>ПРЕПОДАВАТЕЛИ</p>
                        <img src={teacherIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <p>ЗАДАНИЯ</p>
                        <img src={taskIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                     <p>НАГРАДЫ</p>
                     <img src={medalIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <p>ЗАЯВКИ НА ПОЛУЧЕНИЕ НАГРАД</p>
                        <img src={penIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <p>АНАЛИТИКА</p>
                         <img src={analiticIcon} alt="" />
                    </div>
                    <div className={styles.AccountManagerContentItems}>
                        <img src={plusIcon} alt="" />
                    </div>
                </div>
        </div>

    </>
  )
}


export default AccountManager;

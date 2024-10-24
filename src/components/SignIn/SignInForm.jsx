import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import fakeUsers from '../../fakeDataBase';
import styles from './SignInForm.module.css'
import firstBlockLogo from '../../assets/firstBlockLogo.svg'
import backArrow from '..//../assets/Back Arrow.png'
import picComp from '..//../assets/PIC_COMP.png'
import glare from '..//..//assets/glare.svg'

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    console.log(error);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = fakeUsers.find((u) => u.username === username && u.password === password);
        
        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: { user: { username: user.username, role: user.role } },
            });
            navigate('/dashBoard');
        } else {
            setError('Неправильно указан логин и пароль');
        }
    };

    if (isAuthenticated) {
        navigate('/dashBoard');
        return null;
    }

    return (
        <div className={styles.SignInWrapper}>
            <div className={styles.FirstBlock}>
                <Link to='/'><img className={styles.firstBlockLogo} src={firstBlockLogo} alt="logo" /></Link>
                <img src={glare} className={styles.glare}>

                </img>
                <img className={styles.PicComp} src={picComp} alt="" />

                </div>
            <form className={styles.SignInForm} onSubmit={handleSubmit}>
            <Link to='/'><img className={styles.backArrow} src={backArrow} alt="arrow" /></Link>
            <h1 className={styles.SignInFormTitle}>Добро пожаловать в ERP</h1>
                <div>
                    <input
                        className={styles.SignInInput}
                        style={{border:error ? '2px solid red': '#F04438'}}
                        placeholder='Введите логин'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        className={styles.SignInInput}
                        style={{border:error ? '2px solid red': '#F04438'}}
                        placeholder='Введите пароль'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit">Войти</button>
                <p>
                Нет аккаунта? 
                <span 
                    style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }} 
                    onClick={() => navigate('/login')} 
                >
                    Зарегистрироваться
                </span>
            </p>
            </form>
            
        </div>
    );
};

export default SignInForm;
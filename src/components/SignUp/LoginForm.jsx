import React, { useState, useEffect } from 'react';
import {useSelector } from 'react-redux'; 
import { useNavigate, Link } from 'react-router-dom';
import fakeUsers from '../../fakeDataBase'; 
import styles from './LoginForm.module.css';
import firstBlockLogo from '../../assets/firstBlockLogo.svg'
import backArrow from '..//../assets/Back Arrow.png'
import picComp from '..//../assets/PIC_COMP.png'

const LoginPage = () => {
    const navigate = useNavigate();    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null); 
    const [registrationSuccess, setRegistrationSuccess] = useState(null);
    
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashBoard'); 
        }
    }, [isAuthenticated, navigate]);

    const handleRegister = (e) => {
        e.preventDefault();

        const existingUser = fakeUsers.find((u) => u.username === username);
        if (existingUser) {
            setLoginError('Пользователь с таким именем уже существует.');
            return;
        }

        const newUser = { username, password, role: 'user' };
        fakeUsers.push(newUser);
        setUsername('');
        setPassword('');
        setLoginError(null);
        setRegistrationSuccess('Регистрация прошла успешно!');
        
        
        setTimeout(() => {
            navigate('/SignInForm'); 
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(e);
    };

    return (
        <div>
            <div className={styles.LoginWrapper}>
                
                <div className={styles.FirstBlock}>
                <Link to='/'><img className={styles.firstBlockLogo} src={firstBlockLogo} alt="logo" /></Link>
                <div className={styles.SvgContainer}>
                    <svg width="810" height="929" viewBox="0 0 810 1054" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M570.297 78.5865C655.625 78.4248 738.967 106.468 809.191 158.969V-25.2452C722.359 -68.5996 626.851 -87.5939 531.463 -80.4792C436.075 -73.3645 343.873 -40.3694 263.346 15.4678C182.819 71.3051 116.557 148.19 70.66 239.042C24.7631 329.894 0.707031 431.794 0.707031 535.359C0.707031 638.923 24.7631 740.823 70.66 831.675C116.557 922.528 182.819 999.412 263.346 1055.25C343.873 1111.09 436.075 1144.08 531.463 1151.2C626.851 1158.31 722.359 1139.32 809.191 1095.96V911.748C754.734 952.304 692.238 978.429 626.746 988.016C561.253 997.603 494.597 990.383 432.154 966.938C369.712 943.494 313.23 904.481 267.265 853.048C221.301 801.614 187.14 739.199 167.538 670.837C147.937 602.475 143.443 530.08 154.42 459.491C165.397 388.902 191.537 322.096 230.731 264.461C269.926 206.826 321.078 159.975 380.062 127.688C439.045 95.4012 504.209 78.5817 570.297 78.5865Z" fill="url(#paint0_linear_5571_12275)"/>
                <defs>
                <linearGradient id="paint0_linear_5571_12275" x1="819.763" y1="1621.35" x2="404.768" y2="-40.3471" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2B388F"/>
                <stop offset="1" stopColor="#D1E5FF" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
                </div>
                <img className={styles.PicComp} src={picComp} alt="" />
                
                </div>
                <div className={styles.LoginForm}>
                     <Link to='/'><img className={styles.backArrow} src={backArrow} alt="arrow" /></Link>
                    <h1 className={styles.LoginFormTitle}>Добро пожаловать в ERP</h1>

                    
                    <form className={styles.FormWrapper} onSubmit={handleSubmit}>
                        <div>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Введите логин"
                            required
                            autoComplete="username"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введите пароль"
                            required
                            autoComplete="password"
                        />
                        </div>
                        {loginError && <div className={styles.error}>{loginError}</div>} 
                        {registrationSuccess && <div className={styles.succses}>{registrationSuccess}</div>}
                        <button type="submit">Зарегистрироваться</button>
                        <p>
                        Уже есть аккаунт?{' '}
                        <span onClick={() => navigate('/SignInForm')} style={{ textDecoration: 'underline ',cursor: 'pointer', color: 'black' }}>
                            Войти
                        </span>
                    </p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
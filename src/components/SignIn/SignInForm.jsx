import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import fakeUsers from '../../fakeDataBase';
import styles from './SignInForm.module.css'
import firstBlockLogo from '../../assets/firstBlockLogo.png'
import backArrow from '..//../assets/Back Arrow.png'



const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            setError('Неверное имя пользователя или пароль');
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
                <svg width="810" height="1054" viewBox="0 0 810 1054" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M570.297 78.5865C655.625 78.4248 738.967 106.468 809.191 158.969V-25.2452C722.359 -68.5996 626.851 -87.5939 531.463 -80.4792C436.075 -73.3645 343.873 -40.3694 263.346 15.4678C182.819 71.3051 116.557 148.19 70.66 239.042C24.7631 329.894 0.707031 431.794 0.707031 535.359C0.707031 638.923 24.7631 740.823 70.66 831.675C116.557 922.528 182.819 999.412 263.346 1055.25C343.873 1111.09 436.075 1144.08 531.463 1151.2C626.851 1158.31 722.359 1139.32 809.191 1095.96V911.748C754.734 952.304 692.238 978.429 626.746 988.016C561.253 997.603 494.597 990.383 432.154 966.938C369.712 943.494 313.23 904.481 267.265 853.048C221.301 801.614 187.14 739.199 167.538 670.837C147.937 602.475 143.443 530.08 154.42 459.491C165.397 388.902 191.537 322.096 230.731 264.461C269.926 206.826 321.078 159.975 380.062 127.688C439.045 95.4012 504.209 78.5817 570.297 78.5865Z" fill="url(#paint0_linear_5571_12275)"/>
                <defs>
                <linearGradient id="paint0_linear_5571_12275" x1="819.763" y1="1621.35" x2="404.768" y2="-40.3471" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2B388F"/>
                <stop offset="1" stopColor="#D1E5FF" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>

                </div>
            <form className={styles.SignInForm} onSubmit={handleSubmit}>
            <Link to='/'><img className={styles.backArrow} src={backArrow} alt="arrow" /></Link>
            <h1 className={styles.SignInFormTitle}>Добро пожаловать в ERP</h1>
                <div>
                    <input
                        placeholder='Введите логин'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
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
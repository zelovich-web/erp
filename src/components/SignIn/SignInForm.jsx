import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignInForm.module.css'
import firstBlockLogo from '../../assets/firstBlockLogo.svg'
import backArrow from '..//../assets/Back Arrow.png'
import picComp from '..//../assets/PIC_COMP.png'
import glare from '..//..//assets/glare.svg'
import eye from '..//..//assets/Eye.svg'
import closedEye from '..//..//assets/Closed Eye.svg'
import warning from '..//..//assets/warning.svg'
import google from '..//..//assets/chrome.svg'
import facebook from '..//..//assets/facebook.svg'
import inst from '..//..//assets/instagram.svg'
import { findUsers } from '../../fakeDataBase';





const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = findUsers(username, password)


        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: { user: { username: user.username, role: user.role, fio: user.fio } },
            });
    
            if (user.role === 'account-manager') {
                navigate('/AccountManager');
            } else {
                navigate('/');
            }
        } else {
            setError('Неправильно указан логин и пароль');
        }
    };
    
   
    

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    if (isAuthenticated) {
        navigate('/dashBoard');
        return null;
    }


    const isFormValid = () => {
        return username !== '' && password !== '';
    };

    
    
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
                        type='text'
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
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required    
                    />
                    <img onClick={toggleShowPassword} className={styles.eyePass} src={showPassword ? eye : closedEye} alt="" />

                </div>
                {error && <div className={styles.error}><img src={warning}/>{error}</div>}
                <button 
                className={isFormValid() ? styles.SignInFormBtn : styles.disabledButton} 
                type="submit" 
                disabled={!isFormValid()}
                >
                    Войти
                </button>
                <Link className={styles.ForgotPassword} to='/'><p>Забыли пароль?</p></Link>
                <div className={styles.SignInFormSocialNav}>
                        <Link to='/'><img src={google} alt="google" /></Link>
                        <Link to='/'><img src={facebook} alt="facebook" /></Link>
                        <Link to='/'><img src={inst} alt="inst" /></Link>

                </div>
            </form>
            
            
        </div>
    );
};

export default SignInForm;
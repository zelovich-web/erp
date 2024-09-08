import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import fakeUsers from '../../fakeDataBase'; 

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null); 
    const [isRegistering, setIsRegistering] = useState(false); 

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
    
        if (isAuthenticated) {
            navigate('/dashBoard'); 
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isRegistering) {
            const existingUser = fakeUsers.find(u => u.username === username);
            if (existingUser) {
                setLoginError('Пользователь с таким именем уже существует.');
                return;
            } else {
                const newUser = { username, password, role: 'student' }; 
                fakeUsers.push(newUser);
                alert('Регистрация прошла успешно! Пожалуйста, войдите в систему.');
                setIsRegistering(false); 
                setUsername(''); 
                setPassword('');
                setLoginError(null);
                return;
            }
        }

        const user = fakeUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            const userData = {
                username: user.username,
                role: user.role, 
            };
            dispatch(login(userData)); 
            navigate('/dashBoard'); 
        } else {
            setLoginError('Ошибка входа. Пожалуйста, проверьте свои данные.');
        }
    };

    return (
        <div>
            <h1>{isRegistering ? 'Регистрация' : 'Вход'}</h1>
            {loginError && <div className="error">{loginError}</div>} 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    autoComplete="username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    autoComplete="password"
                />
                <p>
                    {isRegistering ? 'Уже есть аккаунт? ' : 'Нет аккаунта? '}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Войти' : 'Зарегистрироваться'}
                    </span>
                </p>
                <button type="submit">{isRegistering ? 'Зарегистрироваться' : 'Войти'}</button>
            </form>
        </div>
    );
};

export default LoginPage;
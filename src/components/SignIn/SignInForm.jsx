import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fakeUsers from '../../fakeDataBase';

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
            navigate('/DashBoard');
        } else {
            setError('Неверное имя пользователя или пароль');
        }
    };

    if (isAuthenticated) {
        navigate('/DashBoard');
        return null;
    }

    return (
        <div>
            <h2>Вход в аккаунт</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default SignInForm;
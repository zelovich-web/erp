import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем useSelector
import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loginError, setLoginError] = useState(null); 

  
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
  
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/mainPage'); 
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };
        
        try {
            await dispatch(login(user, role)); 
        } catch (error) {
            setLoginError('Ошибка входа. Пожалуйста, проверьте свои данные.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
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
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="account_manager">Account Manager</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
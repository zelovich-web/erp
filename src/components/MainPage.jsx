import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем useSelector
import { useNavigate } from 'react-router-dom';
const MainPage = () => {

    
    const { isAuthenticated, role } = useSelector((state) => state.auth);
    // Получаем роль и статус логина из Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'); // Перенаправляем на страницу логина, если не авторизован
        }
    }, [isAuthenticated, navigate]); // Зависимость — состояние аутентификации и navigate

    
    // Функция для выхода
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' }); // Вызов действия для выхода
        console.log('Вы вышли');
    };

    return (
        <>
        <h1>Добрый день</h1>
                <button onClick={handleLogout}>Выйти</button>
                {role}
        </>
    );
};

export default MainPage;
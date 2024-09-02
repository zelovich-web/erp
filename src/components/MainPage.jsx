import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'; //
import { useNavigate } from 'react-router-dom';
const MainPage = () => {

    
    
    const { isAuthenticated, username, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'); 
        }
    }, [isAuthenticated, navigate]);


    
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <>
        <h1>Ваша роль: {role}</h1>
                <button onClick={handleLogout}>Выйти</button>
        </>
    );
};

export default MainPage;
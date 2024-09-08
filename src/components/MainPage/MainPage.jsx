import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
   

    return (
        <>
        <h1>Главная страница</h1>
        <p><Link to='/login'>Войти</Link></p>
        </>
    );
};

export default MainPage;
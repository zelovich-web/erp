import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
    return <h1>У вас нет доступа к этой странице. <Link to='SignInForm'/>Вернуться на главную</h1>;
};

export default UnauthorizedPage;
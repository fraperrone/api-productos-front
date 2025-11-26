// definimos la login page
import React from 'react';
import Login from '../components/Login';
const LoginPage = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Iniciar Sesión</h2>
            <Login />
        </div>
    );
}
export default LoginPage;
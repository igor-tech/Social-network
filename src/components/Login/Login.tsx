import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Navigate} from 'react-router';
import {LoginForm} from './LoginForm';

const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    if (isAuth) {
        return <Navigate to={`/profile`}/>
    }
    return (
        <div style={{'padding': '20px', 'color': 'white'}}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};


export default Login;

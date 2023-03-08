import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {logoutTC} from '../../redux/auth-reducer';
import {AppStateType, useAppDispatch} from '../../redux/redux-store';

type HeaderType = {
    isAuth: boolean
    login: string
}

function Header(props: HeaderType) {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
    }


    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                 alt="logo"/>
            <div className={s.loginBlock}>
                {isAuth
                    ? (
                        <div style={{display: 'flex', gap: 10}}>
                            <div>{props.login}</div>
                            <button onClick={logoutHandler}>Log out</button>
                        </div>
                    )
                    : <NavLink className={s.navlink} to={'/login'}>Login</NavLink>

                }

            </div>
        </header>
    )

}

export default Header;


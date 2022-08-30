import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {ProfileUserType} from '../../redux/profile-reducer';
import DoublePhoto from '../../assets/images/avatar.png';

type HeaderType = {
    isAuth: boolean
    login: string
}

function Header(props: HeaderType) {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                 alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink className={s.navlink} to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )

}

export default Header;


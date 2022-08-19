import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {SideBarType} from '../../App';
import SideBar from './sideBar/SideBar';

type NavbarType = {
    state: SideBarType
}

function Navbar(props: NavbarType) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.sidebar}>Friends
                <SideBar state={props.state}/>
            </div>
        </nav>
    )
}

export default Navbar;
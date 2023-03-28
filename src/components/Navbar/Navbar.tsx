import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBarContainer from './sideBar/SideBarContainer';


function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 's.activeLink' : ''}>Users</NavLink>
            </div>
            <div className={s.sidebar}>Friends
                <SideBarContainer/>
            </div>
        </nav>
    )
}


export default Navbar;
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import SideBarContainer from './sideBar/SideBarContainer';

const activeLink = (isActive: boolean, isPending: boolean) => isPending ? 'pending' : isActive ? `${s.activeLink}` : ''

const NavbarLink = ({path, name}: {path: string, name: string}) => {
    return <div className={s.item}>
        <NavLink to={path} className={({isActive, isPending}) => activeLink(isActive, isPending)}>{name}</NavLink>
    </div>
}

function Navbar() {
    return (
        <nav className={s.nav}>
            <NavbarLink path={"/profile"} name={'Profile'}/>
            <NavbarLink path={"/dialogs"} name={'Messages'}/>
            <NavbarLink path={"/news"} name={'News'}/>
            <NavbarLink path={"/music"} name={'Music'}/>
            <NavbarLink path={"/settings"} name={'Settings'}/>
            <NavbarLink path={"/users"} name={'Users'}/>
            <div className={s.sidebar}>Friends
                <SideBarContainer/>
            </div>
        </nav>
    )
}


export default Navbar;
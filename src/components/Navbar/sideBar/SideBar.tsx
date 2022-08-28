import React from 'react';
import s from '../Navbar.module.css';
import {SideBarPropsType, SideBarType} from '../../../App';

type SideBarTypeProps = {
    friends: Array<SideBarPropsType>
}

const SideBar = (props: SideBarTypeProps) => {
    return (
        <div className={s.friends}>
            {props.friends.map(a => {
                return (
                    <div key={a.id} className={s.friend}>
                        <img className={s.avatar} src={a.link} alt=""/>
                        {a.name}
                    </div>
                )
            })}
        </div>
    );
};

export default SideBar;
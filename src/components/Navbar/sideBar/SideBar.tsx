import React from 'react';
import s from '../Navbar.module.css';
import {SideBarPropsType} from '../../../App';

type SideBarType = {
    state: FriendType
}

type FriendType = {
    friends: Array<SideBarPropsType>
}

const SideBar = (props: SideBarType) => {
    return (
        <div className={s.friends}>
            {props.state.friends.map(a => {
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
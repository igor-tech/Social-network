import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsItemPropsType = {
    name: string
    id: number
    link: string
}
function DialogItem(props: DialogsItemPropsType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <img className={s.avatar} src={props.link} alt=""/>
            <NavLink className={s.name} to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;

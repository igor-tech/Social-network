import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Arsen'},
        {id: 3, name: 'Elsey'},
        {id: 4, name: 'Roma'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'David'},
        {id: 7, name: 'Alex'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoo!'},
        {id: 4, message: 'Yoo!'},
        {id: 5, message: 'Yoo!'},
        {id: 6, message: 'Yoo!'},
        {id: 7, message: 'Yoo!'},
    ]

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

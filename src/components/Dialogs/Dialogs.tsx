import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPropsType, MessagePropsType} from '../../App';
import {ActionsTypes} from '../../redux/store';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';


type DialogsStateType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}
type DialogsType = {
    state: DialogsStateType
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id} link={n.link}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.state.newMessageBody;


    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder={'enter your message'}
                                   onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;

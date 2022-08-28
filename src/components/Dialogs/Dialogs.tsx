import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPagetType} from '../../App';

type DialogsType = {
    messagesPage: MessagesPagetType
    updateNewMassageBody: (body: any) => void
    sendMessageBody: () => void
}

function Dialogs(props: DialogsType) {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id} link={n.link}/>)
    let messagesElements =  state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessageBody()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMassageBody(body)
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

import React from 'react';
import {DialogPropsType, MessagePropsType} from '../../App';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


type DialogsStateType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}
type DialogsType = {
    store: any
}

function DialogsContainer(props: DialogsType) {
    let state = props.store.getState().messagesPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs messagesPage={state}
                 updateNewMassageBody={onNewMessageChange}
                 sendMessageBody={onSendMessageClick}/>
    )
}

export default DialogsContainer;

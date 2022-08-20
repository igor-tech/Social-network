import React from 'react';
import {DialogPropsType, MessagePropsType} from '../../App';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


type DialogsStateType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}


function DialogsContainer() {
    // let state = props.store.getState().messagesPage
    //
    // const onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageActionCreator())
    // }
    // const onNewMessageChange = (body: string) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().messagesPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return (
                    <Dialogs messagesPage={state}
                             updateNewMassageBody={onNewMessageChange}
                             sendMessageBody={onSendMessageClick}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;

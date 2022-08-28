import React from 'react';
import {InitialStateType, sendMessageActionCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    messagesPage: InitialStateType
}

type MapDispatchPropsType = {
    updateNewMassageBody: (body: string) => void
    sendMessageBody: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMassageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessageBody: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

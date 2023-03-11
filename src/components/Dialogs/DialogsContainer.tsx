import React from 'react';
import {DialogsContainerType, sendMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type MapStatePropsType = {
    messagesPage: DialogsContainerType
}

type MapDispatchPropsType = {
    sendMessageBody: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageBody: (newMessageBody:string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

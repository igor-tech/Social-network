import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPagetType} from '../../App';
import {Field, reduxForm} from 'redux-form';

type DialogsType = {
    messagesPage: MessagesPagetType
    updateNewMassageBody: (body: any) => void
    sendMessageBody: (newMessageBody:string) => void
}

function Dialogs(props: DialogsType) {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id} link={n.link}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    // let newMessageBody = state.newMessageBody;



    const AddNewMessage = (values: any) => {
        props.sendMessageBody(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={AddNewMessage}/>
                </div>
            </div>

        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={'textarea'} name={'newMessageBody'} placeholder={'enter your message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;

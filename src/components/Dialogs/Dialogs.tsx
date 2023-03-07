import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPagetType} from '../../App';
import {useForm} from 'react-hook-form';
import {TextAreaCustom} from '../common/FormsControls/FormsControls';

type DialogsType = {
    messagesPage: MessagesPagetType
    updateNewMassageBody: (body: any) => void
    sendMessageBody: (newMessageBody: string) => void
}

function Dialogs(props: DialogsType) {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id} link={n.link}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm sendMessageBody={(newMessageBody) => props.sendMessageBody(newMessageBody)}/>
                </div>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    sendMessageBody: (newMessageBody: string) => void
}
type AddMessageUseFormType = {
    newMessageBody: string
}

const AddMessageForm = (props: AddMessageFormType) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<AddMessageUseFormType>()

    const onSubmit = (data: any) => {
        props.sendMessageBody(data.newMessageBody)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap:'10px', width: '200px'}}>
            <TextAreaCustom register={register} placeholder={'enter your message'} label={'newMessageBody'} errors={errors.newMessageBody}/>
            <button type={'submit'}>Send</button>
        </form>
    )
}


export default Dialogs;

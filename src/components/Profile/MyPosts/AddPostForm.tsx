import React from 'react';
import {useForm} from 'react-hook-form';
import {TextAreaCustom} from '../../common/FormsControls/FormsControls';

type AddPostFormType = {
    newPostBody: (newPostBody: string) => void
}
type AddPostUseFormType = {
    newPostProfile: string
}

export const AddPostForm = (props: AddPostFormType) => {
    const {register, reset, handleSubmit, formState: { errors } } = useForm<AddPostUseFormType>({mode: 'onChange'})

    const onSubmit = (data: AddPostUseFormType) => {
        props.newPostBody(data.newPostProfile)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '200px'}}>
            <TextAreaCustom register={register} errors={errors.newPostProfile} label={'newPostProfile'} placeholder={'enter your message'}/>
            <button type={'submit'}>Add post</button>
        </form>
    )
}
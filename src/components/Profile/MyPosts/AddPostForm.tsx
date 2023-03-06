import React from 'react';
import {useForm} from 'react-hook-form';

type AddPostFormType = {
    newPostBody: (newPostBody: string) => void
}

export const AddPostForm = (props: AddPostFormType) => {
    const {register, reset, handleSubmit} = useForm()

    const onSubmit = (data: any) => {
        props.newPostBody(data.newPostProfile)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '200px'}}>
            <textarea {...register('newPostProfile')} placeholder={'enter your message'}/>
            <button type={'submit'}>Add post</button>
        </form>
    )
}
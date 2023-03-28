import React from 'react';
import {useForm} from 'react-hook-form';

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
            <textarea {...register('newPostProfile', {
                required: 'field is required',
            })} placeholder={'enter your message'}/>
            {errors && <div style={{color: 'red', fontSize: '14px'}}>{errors.newPostProfile}</div>}
            <button type={'submit'}>Add post</button>
        </form>
    )
}
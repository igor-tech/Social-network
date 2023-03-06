import {Field} from 'redux-form';
import React from 'react';

export const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field value={props.newPostText} placeholder={'write your post'} name={'newPostBody'}
                       component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
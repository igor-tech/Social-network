import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionsTypes, StoreType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type PostType = {
    id: number
    description: string
    likesCount: number
}
type MyPostsContainer = {
    store: any
}

function MyPostsContainer(props: MyPostsContainer) {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts posts={state.profilePage.posts}
                 updateNewPost={onPostChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
        />

    )
}

export default MyPostsContainer;
import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionsTypes, StoreType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

type PostType = {
    id: number
    description: string
    likesCount: number
}

function MyPostsContainer() {
    // let state = props.store.getState()
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts posts={state.profilePage.posts}
                             updateNewPost={onPostChange}
                             addPost={addPost}
                             newPostText={state.profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>


    )
}

export default MyPostsContainer;
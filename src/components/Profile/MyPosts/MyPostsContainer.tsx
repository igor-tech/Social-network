import React from 'react';
import {
    addPostActionCreator,
    ProfileReducerInitialStateType,
    updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import myPosts from './MyPosts';


type MapDispatchPropsType = {
    updateNewPost: (text : string) => void
    addPost: () => void
}


const mapStateToProps = (state: AppStateType): ProfileReducerInitialStateType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPost: (text : string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)

export default MyPostsContainer;
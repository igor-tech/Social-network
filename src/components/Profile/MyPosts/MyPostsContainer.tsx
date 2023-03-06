import React from 'react';
import {addPostActionCreator, ProfileReducerInitialStateType} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import myPosts from './MyPosts';


type MapDispatchPropsType = {
    addPost: (newMessageBody: string) => void
}


const mapStateToProps = (state: AppStateType): ProfileReducerInitialStateType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newMessageBody: string) => {
            dispatch(addPostActionCreator(newMessageBody))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)

export default MyPostsContainer;
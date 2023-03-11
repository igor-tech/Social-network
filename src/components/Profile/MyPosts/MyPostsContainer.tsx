import React from 'react';
import {addPostAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import myPosts from './MyPosts';
import {Dispatch} from 'redux';


type MapDispatchPropsType = {
    addPost: (newMessageBody: string) => void
}
type PostsType = {
    id: number,
    description: string,
    likesCount: number
}

type ProfileReducerInitialStateType = {
    posts: Array<PostsType>,
}
const mapStateToProps = (state: AppStateType): ProfileReducerInitialStateType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: ((newMessageBody: string) => {
            dispatch(addPostAC(newMessageBody))
        })
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)

export default MyPostsContainer;
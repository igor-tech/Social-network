import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';
import profileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


type ProfileStateType = {
    posts: Array<PostPropsType>
    newPostText: any
}


function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;
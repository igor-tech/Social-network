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
type ProfileType = {
    store: any
}


function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;
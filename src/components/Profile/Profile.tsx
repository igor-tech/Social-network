import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';
import profileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes} from '../../redux/store';


type ProfileStateType = {
    posts: Array<PostPropsType>
    newPostText: any
}
type ProfileType = {
    profilePage: ProfileStateType
    dispatch: (action: ActionsTypes) => void
}


function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}

            />
        </div>
    )
}

export default Profile;
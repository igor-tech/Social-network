import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUserType} from '../../redux/profile-reducer';


type ProfileTypeProps = {
    profile: ProfileUserType
}


function Profile(props: ProfileTypeProps) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;
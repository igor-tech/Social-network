import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUserType} from '../../redux/profile-reducer';

type ProfileTypeProps = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
}

function Profile({profile, status, updateStatus}: ProfileTypeProps) {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;
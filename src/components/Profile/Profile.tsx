import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUserType} from '../../redux/profile-reducer';

type ProfileTypeProps = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

function Profile({profile, status, updateStatus,savePhoto, ...props}: ProfileTypeProps) {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={props.isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;
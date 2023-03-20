import React from 'react';
import ProfileInfo, {InputsProfileData} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileUserType} from '../../redux/profile-reducer';

type ProfileTypeProps = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (data: InputsProfileData) => void
}

function Profile({profile, status, updateStatus,savePhoto, saveProfile, ...props}: ProfileTypeProps) {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={props.isOwner} savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer
            />
        </div>
    )
}

export default Profile;
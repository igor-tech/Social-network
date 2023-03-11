import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {ProfileUserType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';


type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo({profile, status,updateStatus}: ProfileInfoType) {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>Обо мне - {profile.aboutMe}</div>
                <hr/>
                <div>
                    {profile.lookingForAJob
                        ? <div>Ищу работу, Требования - {profile.lookingForAJobDescription}</div>
                        : <div>Не в поисках работы</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
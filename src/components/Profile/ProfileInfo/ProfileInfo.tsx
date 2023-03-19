import React, {ChangeEvent, useRef} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {ProfileUserType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import avatar from '../../../assets/images/avatar.png'

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const styleHidden = {
    opacity: 0,
    height: 0,
    width: 0,
    lineHeight: 0,
    overflow: 'hidden',
    padding: 0,
    margin: 0
}

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoType) {
    const inputRef = useRef<HTMLInputElement>(null)

    if (!profile) {
        return <Preloader/>
    }

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            savePhoto(file)
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos?.large || avatar} alt="" style={{height: 200}}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {isOwner && <button onClick={selectFileHandler}>Обновить фотографию</button>}
                {isOwner && <input type={'file'} accept={'.png,.jpg,'} ref={inputRef} style={styleHidden} onChange={onChangeInput}/>}
                {profile.aboutMe && <div>Обо мне - {profile.aboutMe}</div>}
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
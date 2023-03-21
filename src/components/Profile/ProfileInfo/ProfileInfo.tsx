import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {ProfileUserType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import avatar from '../../../assets/images/avatar.png'
import {InputsProfileData, ProfileDataForm} from './ProfileDataForm';
import {ProfileData} from './ProfileData';

type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (data: InputsProfileData) => void

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

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoType) {
    const [editMode, setEditMode] = useState(false)
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
                <div style={{display: 'flex', flexDirection: 'column', width: '220px', gap: 5}}>
                    <img src={profile.photos?.large || avatar} alt="" style={{height: 200}}/>
                    {isOwner && <button onClick={selectFileHandler}>Обновить фотографию</button>}
                    {isOwner && <input type={'file'} accept={'.png,.jpg,'} ref={inputRef} style={styleHidden}
                                       onChange={onChangeInput}/>}
                </div>
                <div style={{display: 'flex', gap: 20, alignItems: 'end'}}>
                    <div style={{fontSize: 20}}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <hr/>

                {editMode && isOwner
                    ? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;



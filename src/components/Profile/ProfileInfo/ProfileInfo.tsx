import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {ProfileUserType, saveProfileTC} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import avatar from '../../../assets/images/avatar.png'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../redux/redux-store';

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

                {editMode
                    ? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;

type ContactPropsType = {
    contactValue?: string
    contactTitle: string
}


const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <>{contactValue && <div><b>{contactTitle}</b>: {contactValue}</div>}</>
}

type ProfileDataPropsType = {
    profile: ProfileUserType
    isOwner: boolean
    goToEditMode: () => void
}

const stylePaper = {
    background: '#4c4c70',
    padding: '5px',
    borderRadius: '10px'
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    const [moreMode, setMoreMode] = useState(false)
    return <>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        {profile.aboutMe && <div>Обо мне - {profile.aboutMe}</div>}
        {!moreMode
            ? <div onClick={() => setMoreMode(true)} style={{cursor: 'pointer'}}>Подробнее...</div>
            : <div style={{display: 'flex', gap: '20px'}}>
                <div style={stylePaper}>
                    <div>Работа</div>
                    {profile.lookingForAJob
                        ? <div>Ищу работу, мои скиллы - {profile.lookingForAJobDescription}</div>
                        : <div>Не в поисках работы</div>
                    }
                </div>
                <div style={stylePaper}>
                    <div>Контакты</div>
                    {!profile.contacts && <div>Контактов пока нет</div>}
                    {Object.keys(profile.contacts as {}).map(key => {
                        return <Contact contactTitle={key}
                                        contactValue={profile.contacts?.[key as keyof typeof profile.contacts]}
                                        key={key}/>
                    })}
                </div>

            </div>
        }
    </>
}
type ProfileDataFormPropsType = {
    profile: ProfileUserType
    saveProfile: (data: InputsProfileData) => void
    setEditMode: (value: boolean) => void

}
type contacts = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

export type InputsProfileData = {
    aboutMe: string,
    contacts?: contacts
    lookingForAJob: boolean,
    lookingForAJobDescription?: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

const ProfileDataForm = ({profile, setEditMode}: ProfileDataFormPropsType) => {
    const {handleSubmit, register, setValue, formState: {errors}, setError} = useForm<InputsProfileData>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<InputsProfileData> = async (data: InputsProfileData) => {
        const res = await dispatch(saveProfileTC(data)) as string
        if (res) {
            let error = res.slice(30, -1).toLowerCase()
            setError('contacts.' + error as keyof InputsProfileData, {message: 'not corrected url'})
            console.log(res)
        }
        if (!res) {
            setEditMode(false)
        }

    };
    useEffect(() => {
        setValue('fullName', profile.fullName)
        setValue('lookingForAJob', profile.lookingForAJob)
        setValue('lookingForAJobDescription', profile.lookingForAJobDescription)
        setValue(`aboutMe`, profile.aboutMe)
        setValue(`contacts`, profile.contacts)
    }, [])
    console.log(errors.contacts?.vk?.message)
    return <form onSubmit={handleSubmit(onSubmit)}>


        <div style={{display: 'flex', gap: '20px'}}>
            <div style={stylePaper}>
                <div>
                    <div>Обо мне</div>
                    <textarea {...register('aboutMe')} placeholder={'About me'}/>
                </div>
                <div>
                    <div>Полное имя</div>
                    <input {...register('fullName')} placeholder={'fullName'}/>
                </div>
            </div>
            <div style={stylePaper}>
                <div>Работа</div>
                <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                    <span>Ищу работу</span>
                    <input {...register('lookingForAJob')} type={'checkbox'}/>
                </div>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <span>Мои скиллы</span>
                    <textarea {...register('lookingForAJobDescription')} placeholder={'my skills'}/>
                </div>
            </div>
            <div style={stylePaper}>
                <div>Контакты</div>
                {Object.keys(errors).length > 0 && <div style={{color: "red", fontSize: 14}}>not corrected url</div> }
                {Object.keys(profile.contacts as {}).map(key => {
                    console.log(Object.keys(profile?.contacts as {}).length)
                    return <div key={key}>
                        <b>{key}</b> <input {...register('contacts.' + key as keyof typeof profile.contacts)}
                                            placeholder={key}/>
                        {/*<ErrorMessage errors={errors} name={'contacts.' + key as keyof JSX.IntrinsicElements}*/}
                        {/*              render={({message}) => <div style={{color: "red", fontSize: 14}}>{message + " " + key}</div>}/>*/}

                    </div>
                })}
            </div>
        </div>
        <button type={'submit'}>Save</button>
    </form>
}

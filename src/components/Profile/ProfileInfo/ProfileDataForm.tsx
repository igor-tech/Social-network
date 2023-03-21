import {ProfileUserType, saveProfileTC} from '../../../redux/profile-reducer';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../redux/redux-store';
import React, {useEffect} from 'react';

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
const stylePaper = {
    background: '#4c4c70',
    padding: '5px',
    borderRadius: '10px'
}

export const ProfileDataForm = ({profile, setEditMode}: ProfileDataFormPropsType) => {
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
                {Object.keys(errors).length > 0 && <div style={{color: 'red', fontSize: 14}}>not corrected url</div>}
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
import React, {useState} from 'react';
import {ProfileUserType} from '../../../redux/profile-reducer';
import {Contact} from './Contact';

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
export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
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
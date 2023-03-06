import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import {ProfileUserType} from '../../../redux/profile-reducer';
import ProfileStatus from './ProfileStatus';


type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.backgroundImage}*/}
            {/*         src="https://www.finakota-souvlaki.gr/wp-content/uploads/2019/08/mt-sample-background-1000x600.jpg.webp"*/}
            {/*         alt="Background"/>*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Обо мне - {props.profile.aboutMe}</div>



                {/*<div>Contacts -*/}
                {/*    <div>facebook - {props.profile.contacts.facebook}</div>*/}
                {/*    <div>vk - {props.profile.contacts.vk}</div>*/}
                {/*    <div>twitter - {props.profile.contacts.twitter}</div>*/}
                {/*    <div>instagram - {props.profile.contacts.instagram}</div>*/}
                {/*    <div>github - {props.profile.contacts.github}</div>*/}
                {/*</div>*/}

                <hr/>

                <div>
                    {props.profile.lookingForAJob
                        ? <div>Ищу работу, Требования - {props.profile.lookingForAJobDescription}</div>
                        : <div>Не в поисках работы</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
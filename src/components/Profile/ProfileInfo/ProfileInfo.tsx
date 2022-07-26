import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.backgroundImage}
                     src="https://www.finakota-souvlaki.gr/wp-content/uploads/2019/08/mt-sample-background-1000x600.jpg.webp"
                     alt="Background"/>
            </div>

            <div className={s.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;
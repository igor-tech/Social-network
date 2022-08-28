import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img01.rl0.ru/afisha/e904x508p0x32f5760x3291q85i/s3.afisha.ru/mediastorage/87/27/5fd2432fb42640fd99f0e9fb2787.jpg',
                followed: false,
                fullName: 'Igor',
                status: 'i am boss',
                location: {
                    city: 'Minsk',
                    country: 'belarus'
                }
            },
            {
                id: 2,
                photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4-1024x576.jpg',
                followed: false,
                fullName: 'Dimych',
                status: 'i am Dimych',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {
                id: 3,
                photoUrl: 'https://www.thevoicemag.ru/upload/img_cache/6bc/6bcd9545fab661fdb62f2c45a52d7807_ce_2000x1331x0x0_cropped_666x444.jpg',
                followed: true,
                fullName: 'Artem',
                status: 'hi i am artem',
                location: {
                    city: 'Minsk',
                    country: 'belarus'
                }
            },
            {
                id: 4,
                photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                followed: true,
                fullName: 'Viktor',
                status: 'how are you',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            }
        ])
    }

    return (
        <div className={styles.background}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <div>
                                <img className={styles.photo} src={u.photoUrl} alt="photoURL"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
            <button onClick={() => {
            }} className={styles.btn}>...More
            </button>
        </div>
    );
};

export default Users;

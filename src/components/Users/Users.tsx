import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css';
import axios from 'axios';
import avatarPhoto from '../../assets/images/avatar.png';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }

    }

    return (

        <div className={styles.background}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <div>
                                <img className={styles.photo} src={u.photos.small ? u.photos.small : avatarPhoto}
                                     alt="photoURL"/>
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
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
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

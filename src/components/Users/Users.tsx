import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css';
import avatarPhoto from '../../assets/images/avatar.png';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={styles.background}>
            <div>
                {slicedPages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.photo} src={u.photos.small ? u.photos.small : avatarPhoto}
                                         alt="photoURL"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>
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
}


export default Users;
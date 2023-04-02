import {FC} from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css';
import avatarPhoto from '../../assets/images/avatar.png';
import {NavLink} from 'react-router-dom';
import {Pagination} from './Pagination';
import classNames from 'classnames';

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

export const Users: FC<UsersPropsType> = ({
                                              follow, onPageChanged, followingInProgress,
                                              unfollow, users, pageSize,
                                              currentPage, totalUsersCount
                                          }) => {
    return (
        <div className={styles.background}>

            {
                users.map(u => <div key={u.id}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={classNames(styles.photo)}
                                         src={u.photos.small ? u.photos.small : avatarPhoto}
                                         alt="photoURL"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  unfollow(u.id)
                                              }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  follow(u.id)
                                              }}>Follow</button>
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
            <div style={{display: 'flex', position: 'relative', justifyContent: 'end'}}>
                <button onClick={() => {
                }} className={styles.btn}>...More
                </button>
                <Pagination onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}
                            totalUsersCount={totalUsersCount}/>
            </div>
        </div>
    );
}
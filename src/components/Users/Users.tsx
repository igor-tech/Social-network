import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css';
import axios from 'axios';
import avatarPhoto from '../../assets/images/avatar.png';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div className={styles.background}>
                <div>
                    {slicedPages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}> {p} </span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={styles.users}>
                            <div className={styles.avatar}>
                                <div>
                                    <img className={styles.photo} src={u.photos.small ? u.photos.small : avatarPhoto}
                                         alt="photoURL"/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}


export default Users;
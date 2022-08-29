import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followfAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowfAC,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import Users from './Users';


type mapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void

}

function mapStateToProps(state: AppStateType): mapStateToProps {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}

function mapDispatchToProps(dispatch: Dispatch):mapDispatchToProps {
    return {
        follow: (userId: number) => {
            dispatch(followfAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowfAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

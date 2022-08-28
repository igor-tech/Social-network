import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../redux/redux-store';
import {followfAC, setUsersAC, unfollowfAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';


type mapStateToProps = {
    users: Array<UserType>
}
type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

function mapStateToProps(state: AppStateType): mapStateToProps {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

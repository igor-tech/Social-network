import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppDispatch, AppStateType} from '../../redux/redux-store';
import {
    followTC,
    getUsersTC,
    setCurrentPageAC,
    setUsersAC,
    toggleFollowingProgress,
    toggleIsFetchingAC,
    unfollowTC,
    UserType
} from '../../redux/users-reducer';
import {compose} from 'redux';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {usersAPI} from '../../api/api';
import {
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalCurrentPageSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from '../../redux/users-selectors';


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type mapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : ''}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

function mapStateToProps(state: AppStateType): mapStateToProps {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getTotalCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        follow: (userId: number) => {
            dispatch(followTC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowTC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgress(isFetching,userId ))
        },
        getUsers: (currentPage:number, pageSize:number) => {
            dispatch(getUsersTC(currentPage,pageSize))
        }

    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)

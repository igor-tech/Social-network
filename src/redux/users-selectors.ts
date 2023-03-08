import {AppStateType} from './redux-store';

export const getUsersSelector = (state: AppStateType) =>  state.usersPage.users
export const getPageSizeSelector = (state: AppStateType) =>  state.usersPage.pageSize
export const getTotalUsersCountSelector = (state: AppStateType) =>  state.usersPage.totalUsersCount
export const getTotalCurrentPageSelector = (state: AppStateType) =>  state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingInProgressSelector = (state: AppStateType) =>  state.usersPage.followingInProgress
import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile, getStatus, ProfileUserType, setUserProfile, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
    authUserId: number | null
    isAuth: boolean

}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}


type OwnPropsType = MapStateToPropsType & MapDispatchPropsType;

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authUserId}`
        }
        // if (!userId) {
        //     const ourUserId = `${this.props.authUserId !== null ? this.props.authUserId :  userId}`
        //
        //     if (ourUserId !== 'null') {
        //         this.props.getProfile(ourUserId)
        //         this.props.getStatus(ourUserId)
        //     } else {
        //         return <Redirect to={'/login'}/>
        //     }
        // }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
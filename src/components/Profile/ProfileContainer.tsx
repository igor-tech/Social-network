import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    getProfileTC,
    getStatusTC,
    ProfileUserType, savePhotoTC, saveProfileTC,
    setUserProfileAC,
    updateStatusTC
} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {InputsProfileData} from './ProfileInfo/ProfileDataForm';



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
    savePhoto: (file: File) => void
    saveProfile: (data: InputsProfileData) => void

}


type OwnPropsType = MapStateToPropsType & MapDispatchPropsType;

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authUserId}`
            if (userId === 'null' || !userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
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
    connect(mapStateToProps, {
        setUserProfile: setUserProfileAC,
        getProfile: getProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,
        savePhoto: savePhotoTC,
        saveProfile: saveProfileTC
    }),
    withRouter,
)(ProfileContainer)
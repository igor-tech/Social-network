import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileUserType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ProfileApi} from '../../api/api';


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile:ProfileUserType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}


type OwnPropsType = MapStateToPropsType & MapDispatchPropsType;

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2'
        }
        ProfileApi.Profile(userId).then(data => {
                this.props.setUserProfile(data)
            });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
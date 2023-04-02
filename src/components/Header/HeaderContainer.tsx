import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {initializedTC, setAuthUserData} from '../../redux/auth-reducer';
import {setUserProfileAC} from '../../redux/profile-reducer';


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string, isAuth: boolean) => void
    setUserProfile: (profile: any) => void
    getAuthMe: () => void
}

type HeaderContainerType =
    MapDispatchToPropsType
    & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login as string,
    }
}

export default connect(mapStateToProps, {setAuthUserData, setUserProfile: setUserProfileAC,getAuthMe: initializedTC})(HeaderContainer);
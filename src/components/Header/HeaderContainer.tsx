import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';
import {ProfileUserType, setUserProfile} from '../../redux/profile-reducer';


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
    setUserProfile: (profile: any) => void
}

type HeaderContainerType =
    MapDispatchToPropsType
    & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }

            });
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

export default connect(mapStateToProps, {setAuthUserData, setUserProfile})(HeaderContainer);
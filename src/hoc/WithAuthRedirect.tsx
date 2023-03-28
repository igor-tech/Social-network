import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {Navigate} from 'react-router';


type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    let RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T & {}}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}


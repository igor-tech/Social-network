import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';


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

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}


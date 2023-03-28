import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {useAppDispatch, useAppSelector} from './redux/redux-store';
import {getAuthMeTC} from './redux/auth-reducer';
import Preloader from './components/common/preloader/Preloader';

export type PostPropsType = {
    id: number
    description: string
    likesCount: number
}
export type DialogPropsType = {
    id: number
    name: string
    link: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: any
}
export type MessagesPagetType = {
    messages: Array<MessagePropsType>
    dialogs: Array<DialogPropsType>
    newMessageBody: string
}
export type SideBarPropsType = {
    id: number
    name: string
    link: string
}
export type SideBarType = {
    friends: Array<SideBarPropsType>
}
export type StatePropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPagetType
    sideBarPage: SideBarType
}

const DialogsContainerLazy = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainerLazy = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainerLazy = React.lazy(() => import('./components/Users/UsersContainer'))

export function App() {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const dispatch = useAppDispatch()
    const catchAllUnhandledErrors = () => {
        alert('Some error occurred')
    }
    useEffect(() => {
        dispatch(getAuthMeTC())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        return () => window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <Suspense fallback={<Preloader/>}>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/dialogs" render={() => <DialogsContainerLazy/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainerLazy/>}/>
                        <Route path="/users" render={() => <UsersContainerLazy/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        </Suspense>
    )
}


import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {useAppDispatch, useAppSelector} from './redux/redux-store';
import {initializedTC} from './redux/auth-reducer';
import Preloader from './components/common/preloader/Preloader';
import {Routes} from 'react-router';

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
        dispatch(initializedTC())
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
                    <Routes>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={Music}/>
                        <Route path="/settings" element={Settings}/>
                        <Route path="/dialogs" element={<DialogsContainerLazy/>}/>
                        <Route path="/profile/:userId?" element={<ProfileContainerLazy/>}/>
                        <Route path="/users" element={<UsersContainerLazy/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </Suspense>
    )
}


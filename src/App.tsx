import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import {useAppDispatch, useAppSelector} from './redux/redux-store';
import {getAuthMeTC} from './redux/auth-reducer';
import {Space, Spin} from 'antd';

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

function App() {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAuthMeTC())
    }, [])

    if (!isInitialized) {
        return <Space
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100
            }}><Spin size="large"/></Space>
    }

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionsTypes, StoreType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
type AppPropsType = {
    state: StatePropsType
    dispatch: (action: ActionsTypes) => void
    store: any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sideBarPage}/>
                <div className={'app-wrapper-content'}>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

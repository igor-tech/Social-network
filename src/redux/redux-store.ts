import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sideBarPage:sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store


export default store


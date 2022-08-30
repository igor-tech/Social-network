import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sideBarPage:sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)


export default store


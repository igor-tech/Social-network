import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import UsersReducer from './users-reducer';

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sideBarPage:sidebarReducer,
    usersPage: UsersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)


export default store


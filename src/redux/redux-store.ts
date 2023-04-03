import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {AppActionsTypes, appReducer} from './app-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reducer';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType =
    | ProfileActionsTypes
    | UsersActionsTypes
    | DialogsActionsTypes
| AppActionsTypes
| AuthActionsTypes

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>

//@ts-ignore
window.store = store


export default store


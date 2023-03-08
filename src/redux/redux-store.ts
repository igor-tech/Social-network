import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk = ThunkAction<unknown, RootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//@ts-ignore
window.store = store


export default store


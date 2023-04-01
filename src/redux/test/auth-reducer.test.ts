import {authReducer, initialStateAuthReducerType} from '../auth-reducer';


describe('authReducer', () => {
    const initialState: initialStateAuthReducerType = {
        isAuth: false,
        email: null,
        login: null,
        id: null,
        captcha: null
    };


    it('should handle auth/SET_USER_DATA action', () => {
        const action = {
            type: 'auth/SET_USER_DATA',
            isAuth: true,
            email: 'test@test.com',
            login: 'test',
            userId: 123
        } as const;
        const expectedState = {
            ...initialState,
            isAuth: action.isAuth,
            email: action.email,
            login: action.login,
            id: action.userId
        };
        expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle auth/GET_CAPTCHA_URL action', () => {
        const action = {
            type: 'auth/GET_CAPTCHA_URL',
            captcha: 'http://somecaptchaurl.com'
        } as const;
        const expectedState = {
            ...initialState,
            captcha: action.captcha
        } ;
        expect(authReducer(initialState, action)).toEqual(expectedState);
    });

});
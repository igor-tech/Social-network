import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {loginTC} from '../../redux/auth-reducer';

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
    general?: string
};
const styleError = {
    color: 'red',
    fontSize: '14px'
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const {handleSubmit, register, formState: {errors}, setError, clearErrors} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        const res = await dispatch(loginTC(data))
        // {res?.messages.length > 0 && setError('general', { type: 'custom', message: res.messages[0] })}


    };
    // const clearErrorHandler = () => {
    //     clearErrors('general')
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '5px', width: '200px'}}>
            <input {...register('email', {
                required: 'field is required'
            })} placeholder={'Email'} type={'email'}/>
            {errors?.email && <div style={styleError}>{errors.email.message}</div>}
            <input {...register('password', {
                required: 'field is required',
                minLength: {
                    value: 8,
                    message: 'password should be more 8 symbols'
                },

            })} placeholder={'Password'} type={'password'}/>
            {errors?.password && <div style={styleError}>{errors.password.message}</div>}
            {/*<ErrorMessage name={'general'} errors={errors} render={({ message }) => <div style={styleError}>{message}</div>}/>*/}
            <label>
                remember me
                <input {...register('rememberMe')} type={'checkbox'}/>
            </label>

            <input type="submit"/>
        </form>
    );
};


const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    if (isAuth) {
        return <Redirect to={`/profile`} />
    }
    return (
        <div style={{'padding': '20px', 'color': 'white'}}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;

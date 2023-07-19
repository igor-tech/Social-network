import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppSelector} from '../../hooks/useAppSelector';
import {loginTC} from '../../redux/auth-reducer';
import React from 'react';

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

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors}, setError} = useForm<Inputs>()
    const captchaUrl = useAppSelector(state => state.auth.captcha)

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const res = await dispatch(loginTC(data))
            setError('password', {message: res as unknown as string})
        } catch (err) {
            console.warn(err as string)
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '5px', width: '200px'}}>

            <input {...register('email', {
                required: 'field is required'
            })} placeholder={'Email'} type={'email'}/>
            {errors?.email && <div style={styleError}>{errors.email.message}</div>}

            <input {...register('password', {
                required: 'field is required',
                minLength: {value: 8, message: 'password should be more 8 symbols'},
            })} placeholder={'Password'} type={'password'}/>
            {errors?.password && <div style={styleError}>{errors.password.message}</div>}

            <label>
                remember me
                <input {...register('rememberMe')} type={'checkbox'}/>
            </label>
            {captchaUrl && <div>
                <img src={captchaUrl as string} alt="captcha"/>
                <input {...register('captcha', {required: 'field is required'})} placeholder={'Symbols from image'}
                       type={'text'}/>
                {errors?.captcha && <div style={styleError}>{errors.captcha.message}</div>}
            </div>}
            <input type="submit"/>
        </form>
    );
};
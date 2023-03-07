import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

type Inputs = {
    [key: string]: string
};

const LoginForm = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '5px', width: '200px'}}>
            <input {...register('email', {
                required: 'field is required'
            })} placeholder={'Email'} type={'email'} />
            {errors?.email && <div style={{color: 'red', fontSize: '14px'}}>{errors.email.message}</div>}
            <input {...register('password', {
                required: 'field is required',
                minLength: {
                    value: 8,
                    message: 'password should be more 8 symbols'
                }
            })} placeholder={'Password'} type={'password'}/>
            {errors?.password && <div style={{color: 'red', fontSize: '14px'}}>{errors.password.message}</div>}
            <label>
                remember me
                <input {...register('rememberMe')} type={'checkbox'}/>
            </label>

            <input type="submit"/>
        </form>
    );
};


const Login = () => {

    return (
        <div style={{'padding': '20px', 'color': 'white'}}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;

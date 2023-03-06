import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

type Inputs = {
    [key: string]: string
};

const LoginForm = () => {
    const {handleSubmit, register, reset} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '200px'}}>
            <input {...register('email')} placeholder={'Email'} type={'email'}/>
            <input {...register('password')} placeholder={'Password'} type={'password'}/>
            <label>
                remember me
                <input {...register('rememberMe')} required type={'checkbox'}/>
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

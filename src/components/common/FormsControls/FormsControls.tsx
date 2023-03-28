import React, {FC} from 'react';
import {FieldError, Path, UseFormRegister} from 'react-hook-form';

interface IFormValues {
    [key: string]: string
}

type InputProps = {
    label: Path<IFormValues>;
    register:  UseFormRegister<IFormValues>;
    errors?: FieldError
    placeholder?: string
}

export const TextAreaCustom: FC<InputProps> = ({placeholder, label, register, errors}) => {
    return <>
         <textarea {...register(label, {
             required: 'field is required',
         })} placeholder={placeholder}/>
        {errors && <div style={{color: 'red', fontSize: '14px'}}>{errors.message}</div>}
    </>
}

export const InputCustom: FC<InputProps> = ({placeholder, label, register, errors}) => {
    return <>
         <input {...register(label, {
             required: 'field is required',
         })} placeholder={placeholder}/>
        {errors && <div style={{color: 'red', fontSize: '14px'}}>{errors.message}</div>}
    </>
}

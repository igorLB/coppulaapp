import React from 'react'
import {Field, ErrorMessage} from 'formik'

interface InputProps {
    label?: string;
    name: string;
}

function Input(props: InputProps & React.HTMLProps<HTMLElement>) {
    const {label, name, ...rest} = props;

    return (
        <div className="">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Input

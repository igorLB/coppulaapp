import React from 'react'
import {Field, ErrorMessage} from 'formik'

interface TextareaProps {
    label?: string;
    name: string;
}

function Textarea(props: TextareaProps & React.HTMLProps<HTMLElement>) {
    const {label, name, ...rest} = props;

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest}/>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Textarea

import React from 'react'
import {Field, ErrorMessage} from 'formik'

type SelectOption = {
    key: string;
    value: string;
}

interface SelectProps {
    label?: string;
    name: string;
    options?: SelectOption[];
}

function Select(props: SelectProps & React.HTMLProps<HTMLElement>) {
    const {label, name, options, ...rest} = props;

    return (
        <div className="">
            <label htmlFor={name}></label>
            <Field as="select" id={name} name={name} {...rest} >
                {
                    options && options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Select

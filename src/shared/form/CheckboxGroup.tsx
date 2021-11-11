import React from 'react'
import {Field, ErrorMessage, FieldProps} from 'formik'

type CheckboxGroupOption = {
    key: string;
    value: string;
}

interface CheckboxGroupProps {
    label?: string;
    name: string;
    options?: CheckboxGroupOption[];
}

function CheckboxGroup(props: CheckboxGroupProps  & React.HTMLProps<HTMLElement>) {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            <label htmlFor="">{label}</label>
            <Field name={name} {...rest} >
                {
                    ( props: FieldProps ) => {
                        const { field } = props;

                        return options && options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        type="checkbox" 
                                        id={option.value} 
                                        {...field} 
                                        value={option.value} 
                                        checked={field.value.includes(option.value)} 
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }

            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}

export default CheckboxGroup

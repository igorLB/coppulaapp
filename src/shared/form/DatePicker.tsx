import React from 'react';
import DateView from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage, FieldProps } from 'formik';


interface DatePickerProps {
    label?: string;
    name: string;
}

function DatePicker(props: DatePickerProps) {
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor="">{label}</label>
            <Field name={name}>
                {( props: FieldProps ) => {
                    const { form, field } = props;
                    const { setFieldValue } = form;
                    const { value } = field;
                    return <DateView 
                        id={name} 
                        {...field} 
                        {...rest} 
                        selected={value} 
                        onChange={( val: any ) => setFieldValue(name, val)} 
                    />
                }}
            </Field>
            <ErrorMessage name={name}/>
        </div>
    )
}

export default DatePicker

import React from "react";
import style from "./FormsControlsClass.module.css"
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";

type FormControlPropsType = {
    meta: { error?: any, touched: boolean }
}


export const FormControl: React.FC<FormControlPropsType> = ({meta: {error, touched}, children}) => {
    const hasError = error && touched;

    return (
        <div className={`${style.formControl} ${hasError ? style.error : ""}`}>
            <div>
                {children}
            </div>
            {hasError ? <span>{error}</span> : ""}
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props: {} | undefined = {},
    text: string | undefined = "",) {
    return (
        <div>
            <Field
                placeholder={placeholder}
                component={component}
                validate={validators}
                name={name}
                {...props}

            />
            {text}
        </div>
    )
}
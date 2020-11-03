import * as React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, LinearProgress, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import {useSelector} from "react-redux";
import {AppStateType} from '../../redux/redux-store';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

interface Values {
    email: string
    password: string
    checkbox: boolean
    captchaUrl?: string | null

}

type LoginMUIType = {
    onSubmit: (formData: Values) => any
    captchaUrl?: string | null
}

const LoginFormik: React.FC<LoginMUIType> = ({onSubmit, captchaUrl}): React.ReactElement => {

    const error = useSelector((state: AppStateType) => state.auth.error)

    const getFormData = (formData: Values) => {
        onSubmit(formData)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Typography color={"primary"} component="h1" variant="h5">
                Войти
            </Typography>
            {error ? <Typography color={"secondary"}>{error}</Typography> : ""}

            <Formik
                initialValues={{
                    email: 'free@samuraijs.com',
                    password: 'free',
                    checkbox: false
                }}
                validate={values => {
                    const errors: Partial<Values> = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        getFormData(values)

                    }, 500);
                }}
            >
                {({submitForm, isSubmitting}) => (
                    <Form>
                        <Field
                            component={TextField}
                            name="email"
                            type="email"
                            label="Email"
                            helperText="Please Enter Email"
                        />
                        <br/>
                        <Field
                            component={TextField}
                            type="password"
                            label="Password"
                            name="password"
                            helperText="Please Enter Password"
                        />
                        <br/>

                        <Typography variant={"body2"}>Запомнить</Typography>
                        <Field
                            component={Checkbox}
                            name="rememberMe"
                            type='checkbox'
                        />
                        {isSubmitting && <LinearProgress/>}
                        <br/>
                        {captchaUrl &&
                        <>
                            <br/>
                            <img src={captchaUrl as string} alt="captcha"/>

                            <Field
                                component={TextField}
                                name="captcha"
                                type="text"
                                label="text"
                            />
                        </>}
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Войти
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default LoginFormik
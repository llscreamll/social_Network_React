import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoginEntrance} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, getIsAuth} from "../../redux/users-selectors";
import {Grid, Typography} from "@material-ui/core";
import LoginFormik from './LoginFormik';

type LoginFormValuesType = {
    email: string
    password: string
    checkbox: boolean
    captcha?: string | null
}

type LoginType = {}
const Login: React.FC<LoginType> = () => {
    let isAuth = useSelector(getIsAuth)
    let captchaUrl = useSelector(getCaptchaUrl)

    let dispatch = useDispatch();

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(LoginEntrance(formData.email, formData.password, formData.checkbox, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <Grid
            style={{textAlign:'center',height:'100vh'}}
            container
              direction="column"
              justify="center"
              alignItems="center">
            <Grid item xs={12}>
                <LoginFormik
                    captchaUrl={captchaUrl}
                    onSubmit={onSubmit}
                />
            </Grid>

        </Grid>

    )
}
export default Login;






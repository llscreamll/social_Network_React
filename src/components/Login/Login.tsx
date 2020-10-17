import React from 'react';
import style from "../Common/FormsControls/FormsControlsClass.module.css"
import {useDispatch, useSelector} from "react-redux";
import {LoginEntrance} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, getIsAuth} from "../../redux/users-selectors";
import LoginReduxForm from "./LoginReduxForm";


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}

type LoginType = {}
const Login: React.FC<LoginType> = () => {
    let isAuth = useSelector(getIsAuth)
    let captchaUrl = useSelector(getCaptchaUrl)

    let dispatch = useDispatch();

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(LoginEntrance(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.loginForm}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={captchaUrl}
            />
        </div>

    )
}
export default Login;






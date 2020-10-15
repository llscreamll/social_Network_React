import React from 'react';
import style from "../Common/FormsControls/FormsControlsClass.module.css"
import {connect} from "react-redux";
import {LoginEntrance} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from 'redux-form'
import {GetStringKeys} from "../../types/types";




type LoginFormsOwnProps = {
    captchaUrl?: string | null
}
type mapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type mapDispatchPropsType = {
    LoginEntrance: (email: string, password: string, rememberMe: boolean, captcha?: string | null | undefined) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}
// type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>


const maxLength20 = maxLengthCreator(20)

let LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormsOwnProps> & LoginFormsOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (



        <form onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesTypeKeys>("Email: free@samuraijs.com", "email", [required], Input)}
                {createField<LoginFormValuesTypeKeys>("Password: free", "password", [required, maxLength20], Input, {type: "password"})}
                {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            </div>

            {error ?
                <div className={style.formSummaryError}>{error}</div>
                : ""}
            {captchaUrl !== null ?
                <div>
                    <img src={captchaUrl} alt=""/>
                    {createField<LoginFormValuesTypeKeys>("", "captcha", [], Input)}
                </div>
                :
                ""}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormsOwnProps>({form: "login"})(LoginForm)







const Login: React.FC<mapStatePropsType & mapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.LoginEntrance(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.loginForm}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}



const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.urlCaptcha
    }
}
export default connect(mapStateToProps, {LoginEntrance})(Login)






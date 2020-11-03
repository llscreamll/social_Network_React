import {ResultCodesCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {autAPI} from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import {BaseThunkType, PropertiesTypes} from "../types/types";


type initialStateType = typeof initialState
type ActionTypes = ReturnType<PropertiesTypes<typeof actions>>

type ThunkType = BaseThunkType<ActionTypes | ReturnType<typeof stopSubmit> >


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    urlCaptcha: null as string | null,
    error: null as string | null
}
const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA' :
            return {
                ...state,
                ...action.payload,
                error: "",
            }
        case 'ADD_ERROR_LOGIN' :
            return {
                ...state,
                error: action.payload
            }

        case 'GET_CAPTCHA_URL':
            return {
                ...state,
                urlCaptcha: action.urlCaptcha
            }
        default:
            return state;
    }

}
const actions = {
     setAuthUserData : (userId: number
         | null, email: string
         | null, login: string
         | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
     addErrorLogin : (message: string) => ({type:'ADD_ERROR_LOGIN',payload:message} as const),
     setCaptchaUrlSecurity : (urlCaptcha: null | string) => ({type: 'GET_CAPTCHA_URL', urlCaptcha} as const)
}
export const authMeRegister = () => async (dispatch: any) => {
    const response = await autAPI.authMe();
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const LoginEntrance = (email: string, password: string, rememberMe: boolean, captcha?: string | null): ThunkType => async (dispatch) => {


    const response = await autAPI.loginAuth(email, password, rememberMe, captcha)
    debugger
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(authMeRegister())
    } else if (response.resultCode === ResultCodesEnum.Error) {
        const message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(actions.addErrorLogin(message));
    } else if (response.resultCode === ResultCodesCaptchaEnum.CaptchaIsRequired) {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(actions.addErrorLogin(message));
        securityAPI.getCaptchaUrl()
            .then((data) => {
                dispatch(actions.setCaptchaUrlSecurity(data.url))
            })
    }
}
export const Logout = ():ThunkType => async (dispatch) => {

    const response = await autAPI.logoutAuth()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
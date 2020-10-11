import {instance, ApiResponseType, ResultCodesCaptchaEnum} from "./api";

type MeResponseDataType = {
    id: null, email: string, login : string
}
type LoginResponseDataType = {
    userId :number
}

export const autAPI = {
    authMe() {
        return instance.get<ApiResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data)
    },
    loginAuth(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<ApiResponseType<LoginResponseDataType | ResultCodesCaptchaEnum>>(`auth/login`, {
            email, password, rememberMe, captcha
        })
            .then(response => response.data)
    },
    logoutAuth() {
        return instance.delete(`auth/login`)
    },
}
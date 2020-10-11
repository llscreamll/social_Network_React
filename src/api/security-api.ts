import {instance} from "./api";

type ResponseDataUrlType = {
    url : string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<ResponseDataUrlType>("security/get-captcha-url")
            .then(response => response.data)
    }
}
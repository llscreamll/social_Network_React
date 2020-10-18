import axios from "axios";
import { UserType } from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b151adfe-6c84-499c-a129-c58da07da97d"
    }
})

export type ApiResponseType<D = {},RC = ResultCodesEnum > = {
    data: D
    messages: Array<string>
    resultCode : RC
}

export enum ResultCodesEnum {
    Success=0,
    Error=1,
}
export enum ResultCodesCaptchaEnum {
    CaptchaIsRequired = 10
}
export type GetItemsType = {
    items : Array<UserType>
    totalCount : number
    error : string | null

}

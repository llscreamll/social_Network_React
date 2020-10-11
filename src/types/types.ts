import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux/redux-store";
import {Action} from "redux";

// actions
// V-01
 export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// V-02
// export type PropertiesTypes<T> = T extends {[key: string]: (...arg:any[])=> infer U}  ? U : never

//thunk
export type BaseThunkType<A extends Action, R= Promise<void>> = ThunkAction<R,AppStateType, unknown, A>

//Redux-Form
export type GetStringKeys<T> =  Extract<keyof T,string>



export type postType = {
    id: number, like: number, mes: string
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}


export type PhotosType = {
    small: string |  undefined
    large: string | undefined

}

export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: contactsType
    photos: PhotosType | null | undefined
    aboutMe : string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean

}
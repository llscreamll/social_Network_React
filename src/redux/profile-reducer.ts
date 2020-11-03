import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, PhotosType, postType, ProfileType, PropertiesTypes} from "../types/types";
import {profileAPI} from "../api/profile-api";


let initialState = {
    posts: [
        {id: 1, like: 15, mes: "hello!"},
        {id: 2, like: 10, mes: "how are you doing?"},
        {id: 3, like: 5, mes: "checking messages"},
        {id: 4, like: 31, mes: "I see you =)"}] as Array<postType>,
    profile: null as ProfileType | null,
    preloaderUsers: false as true | false,
    status: null as string | null
};

type initialStateType = typeof initialState


type ActionsType = ReturnType<PropertiesTypes< typeof actions>>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {


    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: (state.posts.length - 1 >= 0) ? state.posts[state.posts.length - 1].id + 1 : 1,
                    like: 0,
                    mes: action.newPost
                }]
            }
        case 'SET_USER_PROFILE':
            return {
                ...state, profile: action.profile , preloaderUsers: false // preloader  false
            }
        case 'SET_STATUS_PROFILE':
            return {
                ...state, status: action.status
            }
        case 'SET_USER_PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case 'SET_EDIT_PROFILE':
            return {...state, profile: {...state.profile , ...action.editProfile } as ProfileType}

        case 'IS_PRELOADER_USERS': {
            return {...state, preloaderUsers: action.preloader}
        }
        case 'DELETE_POST': {
            return {
                ...state, posts: [...state.posts.filter(id => id.id !== action.postId)]
            }
        }
        default:
            return state;
    }
}

export const actions = {
     addPostActionCreator : (newPost: string) => ({type: 'ADD_POST', newPost} as const),
    setPreloaderUsers : (preloader: false | true) => ({type: 'IS_PRELOADER_USERS', preloader} as const),
    deletePost : (postId: number) => ({type: 'DELETE_POST', postId} as const),
    setUsersProfile : (profile: ProfileType | null) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatusProfile : (status: string) => ({type: 'SET_STATUS_PROFILE', status} as const),
    setSavePhoto : ( photos : PhotosType ) => ({type: 'SET_USER_PHOTO', photos} as const),
    saveProfileInfo : (editProfile: ProfileType | null) => ({type: 'SET_EDIT_PROFILE', editProfile} as const)
}



export const getUsersProfiles = (userId: number) : ThunkType => async (dispatch) => {
    let data= await profileAPI.getProfileUsers(userId)
    dispatch(actions.setUsersProfile(data))
}
export const getStatusProfileThunk = (userID: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userID)
    dispatch(actions.setStatusProfile(data))

}
export const updateStatusProfileThunk = (status: string):ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {

        dispatch(actions.setStatusProfile(status))
    }
}
export const savePhoto = (file: File) : ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhotoUser(file)
    if (response.resultCode === 0) {

        dispatch(actions.setSavePhoto(response.data.photos))
    }
}
export const saveProfile = (editProfile: ProfileType):ThunkType => async (dispatch) => {

    let response = await profileAPI.saveProfileToServer(editProfile)
    if (response.resultCode === 0) {
        dispatch(actions.saveProfileInfo(editProfile))
        debugger
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("profileEdit", {_error: `${message}`}));
        return Promise.reject(message);

    }
}

export default profileReducer;
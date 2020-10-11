import {PhotosType, ProfileType} from "../types/types";
import {ApiResponseType, instance} from "./api";

type PhotosSaveType ={
    photos : PhotosType
}

export const profileAPI = {
    getProfileUsers(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<ApiResponseType>(`profile/status`, {
            status: status
        })
    },
    savePhotoUser(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<ApiResponseType<PhotosSaveType>>(`profile/photo`, formData)
            .then(response => response.data)
    },
    saveProfileToServer(profile: ProfileType) {
        return instance.put<ApiResponseType>(`profile/`, profile)
            .then(response => response.data)
    },


}
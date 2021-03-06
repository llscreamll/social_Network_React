import {ApiResponseType, GetItemsType, instance} from "./api";

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10, term: string = "", friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(response => response.data)

    },
    postUsersFollow(userID: number) {
        return instance.post<ApiResponseType>(`follow/${userID}`)
            .then(response => response.data)
    },
    deleteUsersFollow(userID: number) {
        return instance.delete<ApiResponseType>(`follow/${userID}`)
            .then(response => response.data)
    }
}
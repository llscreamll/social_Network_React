import { GetItemsType, instance, ResultCodesEnum} from "./api";

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)

    },
    postUsersFollow(userID: number) {
        return instance.post<ResponseType>(`follow/${userID}`, {})
            .then(response => response.data)
    },
    deleteUsersFollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data)
    }
}
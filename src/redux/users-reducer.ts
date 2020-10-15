import {BaseThunkType, PropertiesTypes, UserType} from "../types/types";
import {usersAPI} from "../api/users-api";
import {Dispatch} from "redux";
import {ApiResponseType} from "../api/api";


export type initialStateType = typeof initialState
type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>

export type FilterType = typeof initialState.filter

type ThunkType = BaseThunkType<ActionsTypes>


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 32,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users id
    filter: {
        term: "",
        friend: null as boolean | null
    }

};

export let usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: !el.followed}
                    }
                    return el
                }),
            }
        case  "SET_USERS": {
            return {...state, users: action.users}
        }

        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUserCount: action.totalUserCount}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case "SET_FILTER": {
            return {...state, filter: action.payload}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?
                    [...state.followingInProgress, action.userID]
                    :
                    state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }

}

export const actions = {
    followToggle: (userID: number) => ({type: 'TOGGLE_FOLLOW', userID} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),

    setFilter: (filter: FilterType) => ({type: 'SET_FILTER', payload: filter} as const),

    totalUserCounts: (totalUserCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUserCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userID: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userID
    } as const)


}


export const getUsersThunk = (page: number, pageSize: number, filter: FilterType ): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page))
    dispatch(actions.setFilter(filter))


    let data = await usersAPI.getUsers(page, pageSize, filter.term,filter.friend)

    dispatch(actions.setUsers(data.items));
    dispatch(actions.totalUserCounts(data.totalCount));
    dispatch(actions.toggleIsFetching(false));
}

export const follow = (UserId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, UserId, usersAPI.postUsersFollow.bind(UserId))
}
export const unFollow = (UserId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, UserId, usersAPI.deleteUsersFollow.bind(UserId));
}
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   UserId: number,
                                   apiMethod: (userId: number) => Promise<ApiResponseType>) => {
    dispatch(actions.toggleFollowingProgress(true, UserId))
    let data = await apiMethod(UserId);

    if (data.resultCode === 0) {
        dispatch(actions.followToggle(UserId))
    }
    dispatch(actions.toggleFollowingProgress(false, UserId))
}

export default usersReducer;





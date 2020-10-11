import {BaseThunkType, PropertiesTypes, UserType} from "../types/types";
import {usersAPI} from "../api/users-api";



type initialStateType = typeof initialState;
type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>

type ThunkType = BaseThunkType<ActionsTypes>


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 32,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users id

};

let usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

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

const actions = {
    followToggle: (userID: number) => ({type: 'TOGGLE_FOLLOW', userID} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    totalUserCounts: (totalUserCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUserCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userID: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userID
    } as const)
}




export const getUsersThunk = (page: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.setUsers(data.items));
    dispatch(actions.totalUserCounts(data.totalCount));
    dispatch(actions.toggleIsFetching(false));
}

export const follow = (UserId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, UserId, usersAPI.postUsersFollow(UserId))
}
export const unFollow = (UserId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, UserId, usersAPI.deleteUsersFollow(UserId));
}
const _followUnfollowFlow = async (dispatch : any, UserId: number, apiMethod: any) => {
    dispatch(actions.toggleFollowingProgress(true, UserId))
    let data = await apiMethod;

    if (data.resultCode === 0) {
        dispatch(actions.followToggle(UserId))
    }
    dispatch(actions.toggleFollowingProgress(false, UserId))
}

export default usersReducer;





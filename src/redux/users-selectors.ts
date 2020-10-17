import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector = (state : AppStateType) =>{
    return state.usersPage.users;
};
export const getUsers = createSelector( getUsersSelector, (users) =>{
  return   users.filter(el => true)
})
export const getPageSize = (state : AppStateType) =>{
    return state.usersPage.pageSize;

};
export const getTotalUserCount = (state : AppStateType) =>{
    return state.usersPage.totalUserCount;
};
export const getCurrentPage = (state : AppStateType) =>{
    return state.usersPage.currentPage;
};
export const getIsFetching = (state : AppStateType) =>{
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state : AppStateType) =>{
    return state.usersPage.followingInProgress;
};
export  const getIsAuth = (state : AppStateType) =>{
    return state.auth.isAuth
}

export const getUsersFilter =(state : AppStateType) =>{
    return state.usersPage.filter
}

export const getCaptchaUrl = (state :AppStateType )=> {
    return  state.auth.urlCaptcha
}




import {getUsersThunk, follow, unFollow,} from "../../redux/users-reducer";
import style from "./Users.module.css"
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Reloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";

type MapStateToPropsType = {
    isAuth: boolean
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUserCount: number
    users: Array<UserType>
    followingProgress: Array<number>
}
type mapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
}
type OwnPropsType = {
    pageTitle: string

}
type propsType = MapStateToPropsType & mapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<propsType> {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize);
    }

    render() {
        return <>

            <div className={style.pageUsers}>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingProgress={this.props.followingProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       isAuth={this.props.isAuth}
                />
            </div>
        </>
    }

}

let mapStateProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    //  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
    connect<MapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateProps, {
        getUsersThunk,
        follow,
        unFollow
    }))(UsersContainer)

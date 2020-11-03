import React, {FC, useEffect} from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css"
import {UsersSearchForm} from "./UsersSearchFrom";
import {FilterType, follow, getUsersThunk, unFollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getPageSize,
    getTotalUserCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";


type queryParamsType = { term?: string, page?: string, friend?: string };
export let Users: FC = (): React.ReactElement => {

    const totalUserCount = useSelector(getTotalUserCount)
    const users = useSelector(getUsers)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingProgress = useSelector(getFollowingInProgress)
    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as queryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break
        }

        dispatch(getUsersThunk(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: queryParamsType = {};
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersThunk(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunk(1, pageSize, filter))
    }

    const followUsers = (UserId: number) => {
        dispatch(follow(UserId))
    }
    const unFollowUsers = (UserId: number) => {
        dispatch(unFollow(UserId))
    }

    return (
        <>
            <div>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>

            <div className={style.usersPages}>

                <Paginator totalUserCount={totalUserCount}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}
                />

                <div className={style.usersPage}>
                    {
                        users.map((el,id) => {
                            return (
                                <div className={style.users} key={`${id}_${el.name}`}>
                                    <User user={el}
                                          followingProgress={followingProgress}
                                          isAuth={isAuth}
                                          followUsers={followUsers}
                                          unFollowUsers={unFollowUsers}
                                          key={el.id}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>)
}
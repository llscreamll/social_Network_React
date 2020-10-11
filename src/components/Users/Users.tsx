import React, { FC } from 'react';
import { UserType} from '../../types/types';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css"



type usersType = {
    currentPage: number
    totalUserCount : number
    pageSize : number
    onPageChanged : ( pageNumber : number) => void
    users : Array<UserType>
    followingProgress : Array<number>
    follow : (UserId : number) => void
    unFollow :(UserId : number) => void
    isAuth: boolean
}

let Users : FC<usersType> = ({currentPage,
                 totalUserCount,
                 pageSize,
                 onPageChanged,
                 users,
                 followingProgress,
                 follow,
                  isAuth,
                 unFollow}) => {
    return (
        <div className={style.usersPages}>
           <Paginator currentPage={currentPage}
                      totalUserCount={totalUserCount}
                      pageSize={pageSize}
                      onPageChanged={onPageChanged}
           />
           <div className={style.usersPage}>
            {
                users.map(el => {
                return (
                    <div className={style.users}  >
                    <User user={el}
                          followingProgress={followingProgress}
                          isAuth={isAuth}
                          follow={follow}
                          unFollow={unFollow}
                          key={el.id}
                    />
                    </div>
            )})
            }
           </div>


        </div>

    )
}

export default Users;
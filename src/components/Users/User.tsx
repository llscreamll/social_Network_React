import React from 'react';
import avatar from "../images/avatar.jpg"
import {NavLink} from "react-router-dom";
import style from "./Users.module.css"
import { UserType} from "../../types/types";

type PropsType = {
    user: UserType
    isAuth: boolean
    followingProgress: Array<number>
    followUsers : (userId : number) => void
    unFollowUsers : (userId : number) => void
}

let User: React.FC<PropsType> = ({user,followingProgress,followUsers,unFollowUsers,isAuth}) => {

    return (
            <div className={style.usersBorder}>
                <NavLink to={`/profile/${user.id}`}>
                <img style={{width: '100px'}} src={user.photos.small != null ? user.photos.small : avatar} alt="logo"/>
                </NavLink>

                <div>{user.name}</div>
                <div className={style.statusPage}>{user.status}</div>

                {isAuth ? <div>
                    {user.followed ? <button disabled={followingProgress.some(id => id === user.id)} onClick={
                            () => { unFollowUsers(user.id) }
                        }>Отписаться</button> :
                        <button disabled={followingProgress.some(id => id === user.id) } onClick={
                            () => {followUsers(user.id) }

                        }>Подписаться</button>}
                </div>
                    : <button disabled={true} >Подписаться</button>}

            </div>

    )
            }

export default User;
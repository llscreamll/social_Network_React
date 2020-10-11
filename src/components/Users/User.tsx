import React from 'react';
import avatar from "../images/avatar.jpg"
import {NavLink} from "react-router-dom";
import style from "./Users.module.css"
import { UserType} from "../../types/types";

type PropsType = {
    user: UserType
    isAuth: boolean
    followingProgress: Array<number>
    follow : (userId : number) => void
    unFollow : (userId : number) => void
}

let User: React.FC<PropsType> = ({user,followingProgress,follow,unFollow,isAuth}) => {

    return (
            <div className={style.usersBorder}>
                <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : avatar} alt="logo"/>
                </NavLink>

                <div>{user.name}</div>
                <div className={style.statusPage}>{user.status}</div>

                {isAuth ? <div>
                    {user.followed ? <button disabled={followingProgress.some(id => id === user.id)} onClick={
                            () => { unFollow(user.id) }
                        }>Отписаться</button> :
                        <button disabled={followingProgress.some(id => id === user.id) } onClick={
                            () => { follow(user.id) }

                        }>Подписаться</button>}
                </div>
                    : <button disabled={true} >Подписаться</button>}

            </div>

    )
            }

export default User;
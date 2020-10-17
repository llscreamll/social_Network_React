import style from "./Users.module.css"
import React from "react";
import Preloader from "../Common/Reloader";
import {getIsFetching} from "../../redux/users-selectors";
import {useSelector} from "react-redux";
import {Users} from "./Users";

type UsersPageType ={
}
const UsersContainer : React.FC<UsersPageType> = (props)=>{
    let isFetching = useSelector(getIsFetching)
    return(
        <div className={style.pageUsers}>
            {isFetching ? <Preloader/> : null}
            <Users />
        </div>
    )
}
export  default UsersContainer;



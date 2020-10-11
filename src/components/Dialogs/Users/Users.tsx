import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Dialogs.module.css"

type UsersType = {
    id: number
    users : string
}

 const Users : React.FC<UsersType> = (props) => {
    let url = `/messages/${props.id}`
    return (
        <div className={style.usersBG}>
        <NavLink to={url}>{props.users}</NavLink>
        </div>
    )
}
export default Users
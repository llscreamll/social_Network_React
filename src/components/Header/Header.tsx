import React from 'react'
import style from "./Header.module.css";
import  {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Logout} from "../../redux/auth-reducer";
import logo from "../images/logoSite.png"

type HeaderType = {
    isAuth: boolean
    login: string | null
    logout : () => void
}

const Header: React.FC<HeaderType> = (props) => {

    return (
        <header className={style.header}>
            <img src={logo} alt="logo" />
            <div className={style.loginBlock}>
                {(props.isAuth === false) ?  <NavLink to={'/login'}>Login</NavLink> :  <div>{props.login} <button onClick={props.logout}>Выход</button> </div>}

             </div>
        </header>

    )
}


export default  connect(null,{Logout})(Header);




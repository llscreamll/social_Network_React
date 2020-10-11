import React from 'react'
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Nav = () => {

    return (
        <div className={style.nav}>
            <nav >
                <div > <NavLink className={style.item} to="/profile" activeClassName={style.activeLink}> Profile</NavLink></div>
                <div > <NavLink className={style.item} to="/messages" activeClassName={style.activeLink}> Messages </NavLink></div>
                <div > <NavLink className={style.item} to="/users" activeClassName={style.activeLink}> users </NavLink></div>
                <div > <NavLink className={style.item} to="/news" activeClassName={style.activeLink}> News</NavLink></div>
                <div > <NavLink className={style.item} to="/music" activeClassName={style.activeLink}> Music</NavLink></div>
                <div > <NavLink className={style.item} to="/settings" activeClassName={style.activeLink}> Settings</NavLink></div>

            </nav>
        </div>
    )
}

export default Nav;
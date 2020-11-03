import React from 'react'
import {Link, NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {Button, Toolbar, Typography} from '@material-ui/core';
import {useStyles} from "../../theme";
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AppHeader = () => {
    const classes = useStyles()
    const {login, isAuth} = useSelector((state: AppStateType) => state.auth)
    const imageUser = useSelector((state: AppStateType) => state.profilePages.profile?.photos?.small)

    const dispatch = useDispatch()
    const history = useHistory()

    const logoutOut =  () => {
        dispatch(Logout())
        setTimeout(()=>{
            history.push('/')
        },100)
    }
    return (
        <AppBar className={classes.navbarStyles} color={"primary"} position="static">
            <Toolbar>

                <Link to={"/"}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon color={"primary"}/>
                    </IconButton>
                </Link>

                <Typography variant="h6" color={"primary"} className={classes.title}>
                    Social Network
                </Typography>
                {(isAuth === false) ?
                    <NavLink to={'/login'}>
                        <div><Button>Login</Button></div>
                    </NavLink>
                    :
                    <>
                        <div className={classes.avatarLogin}>
                            <Typography variant={"h6"}>{login}</Typography>
                            <Avatar alt="Cindy Baker" src={imageUser as string}/>
                            <IconButton color={"secondary"} onClick={logoutOut}><ExitToAppIcon/></IconButton>
                        </div>

                    </>}
            </Toolbar>
        </AppBar>


    )
}


export default AppHeader;




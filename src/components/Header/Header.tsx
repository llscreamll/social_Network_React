import React from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {Button, Toolbar, Typography} from '@material-ui/core';
import {useStyles} from "../../theme";
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from "@material-ui/core/Avatar";


const AppHeader = () => {
    const classes = useStyles()
    const {login,isAuth} = useSelector((state:AppStateType) => state.auth)
    const imageUser = useSelector((state:AppStateType) =>  state.profilePages.profile?.photos?.small)

    const dispatch = useDispatch()

    const logoutOut = () =>{



        dispatch(Logout())
    }
    return (
        <AppBar className={classes.navbarStyles} color={"primary"} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Social Network
                </Typography>
                {(isAuth === false) ?
                    <NavLink to={'/login'}>
                            <div> <Button >Login</Button>  </div>
                        </NavLink>
                    :
                    <>
                        <div className={classes.avatarLogin}>
                        <p>{login}</p>
                        <Avatar alt="Cindy Baker" src={imageUser as string} />
                        <Button variant={"outlined"} color={"secondary"} onClick={logoutOut}>Выход</Button>
                        </div>

                      </> }
            </Toolbar>
        </AppBar>







        // <Header className="header">
        //     <div className="logo"/>
        //     <Row >
        //         <Col flex="auto">
        //             {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>*/}
        //             <audio style={{width:"200px",height:"20px"}} src="http://air.radiorecord.ru:8101/rr_320" autoPlay={false} controls={true}></audio>
        //             {/*    <Menu.Item key="1"><Link  to="/users"> users </Link></Menu.Item>*/}
        //             {/*</Menu>*/}
        //         </Col>
        //
        //
        //
        //


        //
        //
        //
        //     </Row>
        // </Header>

    )
}


export default AppHeader;




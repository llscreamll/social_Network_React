import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/Common/Reloader';
import {AppStateType} from './redux/redux-store';
import AppHeader from "./components/Header/Header";
import AppContent from "./AppContent/AppContent";
import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {useStyles} from "./theme";
import {Hidden, Paper, Typography} from "@material-ui/core";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MessageIcon from '@material-ui/icons/Message';
import NearMeIcon from '@material-ui/icons/NearMe';
import MusicNoteIcon from '@material-ui/icons/MusicNote';


let App = () => {
    const initialized = useSelector((state: AppStateType) => state.appReducer.initialized)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialized) return <Preloader/>
    return (
        <>
            <AppHeader/>

            <Container maxWidth={"lg"}>

                <Grid container>
                    <Grid direction="column"
                          xs={2}
                          sm={3}
                    >
                        <Paper elevation={1} className={classes.navbarPaper}>

                            <NavLink to="/profile"
                                     activeClassName={classes.navActiveClass}>
                                <Button className={classes.navMenuButton}>
                                    <PersonOutlineIcon fontSize={"large"}/>
                                    <Hidden smDown>
                                        <Typography  className={classes.navbarText}>Профиль</Typography>
                                    </Hidden>
                                </Button>
                            </NavLink>

                            <NavLink to="/users"
                                     activeClassName={classes.navActiveClass}>
                                <Button className={classes.navMenuButton}>
                                    <PeopleAltIcon fontSize={"large"}/>
                                    <Hidden smDown>
                                        <Typography className={classes.navbarText}>Пользователи</Typography>
                                    </Hidden>
                                </Button>
                            </NavLink>

                            <NavLink to="/messages"
                                     activeClassName={classes.navActiveClass}>
                                <Button className={classes.navMenuButton}>
                                    <MessageIcon fontSize={"large"}/>
                                    <Hidden smDown>
                                        <Typography className={classes.navbarText}>Сообщения</Typography>
                                    </Hidden>
                                </Button>
                            </NavLink>

                            <NavLink to="/news"
                                     activeClassName={classes.navActiveClass}>
                                <Button className={classes.navMenuButton}>
                                    <NearMeIcon fontSize={"large"}/>
                                    <Hidden smDown>
                                        <Typography className={classes.navbarText}>Новости</Typography>
                                    </Hidden>
                                </Button>
                            </NavLink>
                            <NavLink to="/music"
                                     activeClassName={classes.navActiveClass}>
                                <Button className={classes.navMenuButton}>
                                    <MusicNoteIcon fontSize={"large"}/>
                                    <Hidden smDown>
                                        <Typography className={classes.navbarText}>Музыка</Typography>
                                    </Hidden>
                                </Button>
                            </NavLink>
                        </Paper>
                    </Grid>

                    <Grid item
                          xs={10}
                          sm={9}

                    >
                        <Paper elevation={1}>
                            <AppContent/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>


    )

}


export default App;


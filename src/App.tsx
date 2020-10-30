import React, {useEffect} from 'react';
import "./App.css";
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
import {Paper, Typography} from "@material-ui/core";
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
    }, [])

    if (!initialized) return <Preloader/>
    return (
        <>
            <AppHeader/>


            <Container maxWidth={"lg"}>
                <Grid container>
                    <Grid direction="column"
                          alignItems="flex-start"
                          justify="flex-start"
                          container
                          xs={3}>
                        <Paper elevation={2} className={classes.navbarPaper}  >
                        <NavLink to="/profile" className={classes.navLinkStyle}
                                 activeClassName={classes.navActiveClass}>
                            <Button className={classes.navMenuButton}>

                                <PersonOutlineIcon fontSize={"large"}/>
                                <Typography className={classes.navbarText}>Профиль</Typography>
                            </Button>
                        </NavLink>

                        <NavLink to="/users" className={classes.navLinkStyle} activeClassName={classes.navActiveClass}>
                            <Button className={classes.navMenuButton}>
                                <PeopleAltIcon fontSize={"large"}/>
                                <Typography className={classes.navbarText}>Пользователи</Typography>
                            </Button>
                        </NavLink>

                        <NavLink to="/messages" className={classes.navLinkStyle}
                                 activeClassName={classes.navActiveClass}>
                            <Button className={classes.navMenuButton}>
                                <MessageIcon fontSize={"large"}/>
                                <Typography className={classes.navbarText}>Сообщения</Typography>
                            </Button>
                        </NavLink>

                        <NavLink to="/news" className={classes.navLinkStyle} activeClassName={classes.navActiveClass}>
                            <Button className={classes.navMenuButton}>
                                <NearMeIcon fontSize={"large"}/>
                                <Typography className={classes.navbarText}>Новости</Typography>
                            </Button>
                        </NavLink>
                        <NavLink to="/music" className={classes.navLinkStyle} activeClassName={classes.navActiveClass}>
                            <Button className={classes.navMenuButton}>
                                <MusicNoteIcon fontSize={"large"}/>
                                <Typography className={classes.navbarText}>Музыка</Typography>
                            </Button>
                        </NavLink>
                        </Paper>
                    </Grid>


                    <Grid item xs={9}>
                        <Paper elevation={2}>

                        <AppContent/>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </>


    )

}


export default App;


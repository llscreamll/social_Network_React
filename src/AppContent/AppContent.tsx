import React from "react";
import {Redirect, Route} from "react-router-dom";
import Preloader from "../components/Common/Reloader";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import Profile from "../components/Profile/Profile";

const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'));
const Login = React.lazy(() => import('../components/Login/Login'));
const News = React.lazy(() => import('../components/News/News'));
const Music = React.lazy(() => import('../components/Music/Music'));
const Settings = React.lazy(() => import('../components/Settings/Settings'));


const AppContent = () => {
    //authorization check
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    return (
        <>
            <Route exact path="/"> {isAuth ? <Redirect to={"/profile"}/> :
                <Redirect to={"/login"}/>} </Route>
            <Route exact path="/social_Network_React/"> {isAuth ? <Redirect to={"/profile"}/> :
                <Redirect to={"/login"}/>} </Route>

            <Route path="/profile/:userId?"> <Profile/> </Route>
            <React.Suspense fallback={<Preloader/>}>
                <Route exact path="/messages"> <DialogsContainer/> </Route>
                <Route path="/users"> <UsersContainer/> </Route>
                <Route path="/login"> <Login/> </Route>
                <Route path="/news"><News/></Route>
                <Route path="/music"> <Music/> </Route>
                <Route path="/settings"> <Settings/>
                </Route>
            </React.Suspense>
        </>
    )
}
export default AppContent;
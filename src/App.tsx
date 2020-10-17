import React, {useEffect} from 'react';
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import  {Route,Switch,Redirect} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Preloader from './components/Common/Reloader';
import { AppStateType } from './redux/redux-store';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));


type MapStateType = ReturnType<typeof  mapStateToProps>

type MapDispatchType = { initializeApp : () => void }

let App : React.FC<MapStateType & MapDispatchType> =(props)=> {

    useEffect(()=>{props.initializeApp()},[])

    if(!props.initialized) return <Preloader/>



    return (
        <>
    <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer  />

            <div className="app-wrapper-content">

                <Route exact path="/"> {props.isAuth ? <Redirect to={"/profile"}/>  : <Redirect to={"/login"}/>} </Route>
                <Route exact path="/social_Network_React/"> {props.isAuth ? <Redirect to={"/profile"}/>  : <Redirect to={"/login"}/>} </Route>

                <Route path="/profile/:userId?" >  <ProfileContainer /> </Route>

                <React.Suspense fallback={<Preloader />}>
                    <Switch>
                        <Route exact path="/messages"> <DialogsContainer /> </Route>
                        <Route path="/users" >  <UsersContainer /> </Route>
                        <Route path="/login" > <Login /> </Route>
                        <Route path="/news" ><News /></Route>
                        <Route path="/music"> <Music/> </Route>
                        <Route path="/settings"> <Settings/>  </Route>
                    </Switch >
                </React.Suspense>
            </div>

    </div >
            </>
  )

}

const mapStateToProps = (state: AppStateType) =>{
    return{
        initialized : state.appReducer.initialized,
        isAuth : state.auth.isAuth
    }
}


export default connect(mapStateToProps,{initializeApp})(App)


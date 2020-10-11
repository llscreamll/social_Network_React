import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import { Logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerType ={
    isAuth: boolean
    login : string | null
    Logout: () => void
}

const HeaderContainer : React.FC<HeaderContainerType> = (props) =>{

    return  <Header isAuth={props.isAuth}
                    login={props.login}
                    logout={props.Logout}
    />

}

const mapStateToProps = (state : AppStateType) =>{
    return({
    isAuth : state.auth.isAuth,
    login : state.auth.login
    })
}

export default connect(mapStateToProps,{Logout})( HeaderContainer);




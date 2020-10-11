import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";

//HOC

let mapSateToProps = (state: AppStateType) => ({isAuth: state.auth.isAuth})
type MapSateToPropsType = { isAuth: boolean }
type MapDispatchToProps = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapSateToPropsType & MapDispatchToProps> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <WrappedComponent {...restProps as WCP} />
    }
    let ConnectedAuthRedirectComponent = connect<MapSateToPropsType,
        MapDispatchToProps,
        WCP,
        AppStateType>(mapSateToProps)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}




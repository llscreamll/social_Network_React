import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {actions} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";

let mapStateTopProps = (state : AppStateType)=>{
    return {
        dialogsPage :state.dialogsPage,
        authDisabled :state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateTopProps,
        {addNewMessagesDialogs : actions.addNewMessages}),
    withAuthRedirect
)(Dialogs);

import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusProfileThunk,
    getUsersProfiles,
    savePhoto,
    updateStatusProfileThunk,
    saveProfile, actions
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import Reloader from "../Common/Reloader";
import {AppStateType} from "../../redux/redux-store";
import { ProfileType } from '../../types/types';


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type ProfileContainerType = {

    profile : ProfileType
    savePhoto: ( file : File) => void
    status : string
    updateStatusProfileThunk : (status : string) => void
    isOwner : boolean
    getStatusProfileThunk : (userId : number) => void
     setPreloaderUsers: (preloader: boolean) => void
    getUsersProfiles : (userId : number) => void
    authDisabled : boolean
    saveProfile : ( dataForm : ProfileType) => Promise<any>

}
type PathParamsType ={
    userId : string
}


const ProfileContainer: React.FC<MapStateToPropsType & ProfileContainerType & RouteComponentProps<PathParamsType>> = (props) => {

// проверка на рендер страницы
    let [url, setUrl] = useState(props.match.url)

    if (props.match.url !== url) {
        setUrl(props.match.url)
    }

    // получение данных
    let refreshProfile = () => {

        let userId: number | null = +props.match.params.userId;

        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push("/login")
            }
        }
            props.getUsersProfiles(userId as number)
            props.getStatusProfileThunk(userId as number)

    }

    useEffect(() => {
        props.setPreloaderUsers(true)
        refreshProfile()
    }, [url])

    if (props.preloaderUsers) {
        return <Reloader/>
    }
    return (


        <Profile {...props}
                 profile={props.profile}
                 isOwner={!props.match.params.userId}
                 status={props.status}
                 updateStatusProfileThunk={props.updateStatusProfileThunk}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
        />

    )

}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    preloaderUsers: state.profilePages.preloaderUsers

});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfiles,
        getStatusProfileThunk,
        updateStatusProfileThunk,
        savePhoto,
        saveProfile,
        setPreloaderUsers: actions.setPreloaderUsers
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


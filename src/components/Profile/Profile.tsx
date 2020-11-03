import React, {useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import MyProfileInfo from "./profileInfo/MyProfileInfo"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/redux-store';
import {actions, getStatusProfileThunk, getUsersProfiles} from "../../redux/profile-reducer";
import MyPosts from './MyPosts/MyPosts';
import Preloader from "../Common/Reloader";

const Profile = (): React.ReactElement => {
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId)
    const preloader = useSelector((state: AppStateType) => state.profilePages.preloaderUsers)
    const {userId}: any = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const isOwner = !userId;

    useEffect(() => {
        refreshProfile()
    }, [userId])


    let refreshProfile = () => {
        dispatch(actions.setPreloaderUsers(true))
        let userIdNumber: number | null | undefined = userId;

        if (!userIdNumber) {
            userIdNumber = authorizedUserId;
            if (!userIdNumber) {
                history.push("/login")
            }
        }
        dispatch(getUsersProfiles(userIdNumber as number))
        dispatch(getStatusProfileThunk(userIdNumber as number))
    }


    if (preloader) {
        return <Preloader/>
    }
    return (
        <>
            <MyProfileInfo isOwner={isOwner}/>
            <MyPosts/>
        </>


    )
}
export default Profile;
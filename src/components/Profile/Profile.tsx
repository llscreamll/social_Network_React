import React, {useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import MyProfileInfo from "./profileInfo/MyProfileInfo"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/redux-store';
import {actions, getStatusProfileThunk, getUsersProfiles} from "../../redux/profile-reducer";
import MyPosts from './MyPosts/MyPosts';

const Profile = (): React.ReactElement => {
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId)
    const {userId}: any = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const isOwner = !userId;
    useEffect(() => {
        dispatch(actions.setPreloaderUsers(true))
        refreshProfile()
    }, [userId])


    let refreshProfile = () => {
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
    return (
        <>

            <MyProfileInfo isOwner={isOwner}/>
            <MyPosts />
        </>


    )
}

export default Profile;
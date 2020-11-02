import React, {ChangeEvent, useEffect, useState} from "react";
import Preloader from "../../Common/Reloader";
import avatarImages from "../../images/avatar.jpg"
import ProfileStatus from "../profileStatus/ProfileStatus";
import ProfileDataFormRedux from "../ProfileDataForm/ProfileDataForm";
import {Image} from 'antd';
import {ProfileType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {savePhoto, saveProfile} from "../../../redux/profile-reducer";
import {Button, Grid} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ProfileData from "../pfofileData/ProfileData";
import Typography from "@material-ui/core/Typography";


type MyProfileInfoType = {
    isOwner: boolean
}

let MyProfileInfo: React.FC<MyProfileInfoType> = (props) => {

    const {profile, status} = useSelector((state: AppStateType) => state.profilePages)
    let [profiles, setProfiles] = useState(profile)

    const dispatch = useDispatch()
    useEffect(() => {
        setProfiles(profile)
    }, [profile])

    const [editMode, setEditMode] = useState(false);
    let edithMode = () => {
        setEditMode(!editMode);
    }

    let onSubmit = (dataForm: ProfileType) => {
        dispatch(saveProfile(dataForm))
        setEditMode(!editMode)
    }

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    return (
        <>
            <Grid container>
                <Grid item
                      md={5}
                      sm={12}
                >
                    <Image
                        src={profiles?.photos?.large !== null ? profiles?.photos?.large as string : avatarImages}
                        alt="img"
                    />


                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<CloudUploadIcon/>}
                    >
                        {props.isOwner ? <input type={"file"} onChange={onMainPhotoSelector}/> : ""}</Button>
                </Grid>

                <Grid container
                      md={7}
                      sm={12}
                      direction="column"
                >
                    <Grid item>
                        <Typography variant={"h4"}>{profile.fullName}</Typography>
                    </Grid>
                    <Grid item>
                        <ProfileStatus status={status as string}/>
                    </Grid>
                </Grid>
            </Grid>


            {editMode ?
                <ProfileDataFormRedux
                    initialValues={profile}
                    profile={profile}
                    isOwner={props.isOwner}
                    edithMode={edithMode}
                    onSubmit={onSubmit}
                />
                :
                <ProfileData profile={profile}
                             isOwner={props.isOwner}
                             edithMode={edithMode}
                />}

        </>
    )
}

export default MyProfileInfo;
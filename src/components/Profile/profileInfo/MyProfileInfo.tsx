import React, {ChangeEvent, useEffect, useState} from "react";
import Preloader from "../../Common/Reloader";
import avatarImages from "../../images/avatar.jpg"
import ProfileStatus from "../profileStatus/ProfileStatus";
import ProfileDataFormRedux from "../ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {savePhoto, saveProfile} from "../../../redux/profile-reducer";
import {Grid} from "@material-ui/core";
import ProfileData from "../pfofileData/ProfileData";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        imageUser : {
            width: '100%',
            transitionProperty:'1s all initial'
        },
        infoUser :{
            background:'linear-gradient(90deg, #89f7fe 0%,#3f51b5 100%)',
            borderRadius:20
        },
        '@media (max-width: 960px)':{
            imageUser : {
                width: 300
            }
        },

    }),
);


type MyProfileInfoType = {
    isOwner: boolean
}

let MyProfileInfo: React.FC<MyProfileInfoType> = (props) => {
    const classes = useStyles();

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
            <Grid container spacing={3} >

                <Grid item sm={12} md={5}>
                    <img
                        className={classes.imageUser}
                        src={profiles?.photos?.large !== null ? profiles?.photos?.large as string : avatarImages}
                    />
                    {props.isOwner ? <> <input onChange={onMainPhotoSelector} accept="image/*" className={classes.input}
                                               id="icon-button-file" type="file"/>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label> </> : ""}
                </Grid>
                <Grid container item sm={12} md={7}  direction="column">
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
                    infoUser={classes.infoUser}
                    initialValues={profile}
                    profile={profile}
                    isOwner={props.isOwner}
                    edithMode={edithMode}
                    onSubmit={onSubmit}
                />
                :
                <ProfileData profile={profile}
                             infoUser={classes.infoUser}
                             isOwner={props.isOwner}
                             edithMode={edithMode}
                />}

        </>
    )
}

export default MyProfileInfo;
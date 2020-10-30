import React, {ChangeEvent, useEffect, useState} from "react";
import Preloader from "../Common/Reloader";
import avatarImages from "../images/avatar.jpg"
import style from "./Profile.module.css"
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormRedux from "./ProfileDataForm";
import {Image} from 'antd';
import {ProfileType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {savePhoto, saveProfile} from "../../redux/profile-reducer";


type MyProfileInfoType ={
    isOwner: boolean
}

let MyProfileInfo: React.FC<MyProfileInfoType> = (props) => {

    const {profile,status} = useSelector((state:AppStateType) => state.profilePages)


    let [profiles,setProfiles] = useState(profile)


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
        <div className={style.imgHeader} >
            <Image
                    width={300}

                    src={profiles?.photos?.large !== null  ? profiles?.photos?.large  as string  : avatarImages }
                    alt="img"
                />
                <div className={style.HeaderStatus}>
                    <h1>{profile.fullName}</h1>
                    <ProfileStatus status={status as string}
                    />
                </div>

        </div>



            <div>{props.isOwner ? <input type={"file"} onChange={onMainPhotoSelector}/> : ""}</div>


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


// Information user

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    edithMode: () => void

}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, edithMode, isOwner}) => {
    const ObjKeysProfileContacts = profile.contacts

    return (
        <div className={style.informationUsers}>

            <div>
                <h3>AboutMe:</h3>
                <p><i>{profile.aboutMe}</i></p>
            </div>

            <div>
                <h3>Contacts:</h3>

                <ul>
                    {(Object.keys(ObjKeysProfileContacts) as Array<keyof typeof ObjKeysProfileContacts>).map((el) => {
                        return (
                            <li><b>{el}:</b><br/>
                                {ObjKeysProfileContacts[el] !== null && ObjKeysProfileContacts[el] !== undefined ? ObjKeysProfileContacts[el] : "...."}
                            </li>
                        )
                    })}
                </ul>


            </div>
            <div>
                <h3>Looking for a job:</h3>
                {profile?.lookingForAJob ? <i>Yes</i> : <i>No</i>}
            </div>
            <div>
                <h3>Explanation:</h3>
                <p><i>{profile?.lookingForAJobDescription
                    ? profile.lookingForAJobDescription
                    : "..."}</i></p>
            </div>
            {isOwner
                ? <div>
                    <button onClick={edithMode}>Edit</button>
                </div>
                : ""}
        </div>
    )
}

export default MyProfileInfo;
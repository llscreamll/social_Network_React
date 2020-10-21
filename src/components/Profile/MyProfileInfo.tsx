import React, {ChangeEvent, useEffect, useState} from "react";
import Preloader from "../Common/Reloader";
import avatarImages from "../images/avatar.jpg"
import style from "./Profile.module.css"
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormRedux from "./ProfileDataForm";
import {Col, Image, Row} from 'antd';
import {ProfileType} from "../../types/types";

type MyProfileInfoType = {
    saveProfile: (dataForm: ProfileType) => Promise<any>
    profile: ProfileType
    savePhoto: (file: File) => void
    status: string
    updateStatusProfileThunk: (status: string) => void
    isOwner: boolean
}

let MyProfileInfo: React.FC<MyProfileInfoType> = (props) => {

    let [profile, setProfile] = useState(props.profile)

    useEffect(() => {
        setProfile(props.profile)
    }, [props.profile])

    const [editMode, setEditMode] = useState(false);


    let edithMode = () => {
        setEditMode(!editMode);
    }

    let onSubmit = (dataForm: ProfileType) => {

        props.saveProfile(dataForm)
            .then(() => {
                setEditMode(!editMode)
            })
    }
    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <>
        <div className={style.imgHeader} >
            <Image
                    width={300}
                    src={profile.photos?.large as string ? profile.photos?.small as string : avatarImages}
                    alt="img"
                />
                <div className={style.HeaderStatus}>
                    <h1>{profile.fullName}</h1>
                    <ProfileStatus status={props.status}
                                   updateStatusProfileThunk={props.updateStatusProfileThunk}
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
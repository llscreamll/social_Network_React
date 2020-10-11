import React, {ChangeEvent, useState} from "react";
import Preloader from "../Common/Reloader";
import avatarImages from "../images/avatar.jpg"
import style from "./Profile.module.css"
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormRedux from "./ProfileDataForm";
import { ProfileType } from "../../types/types";

type MyProfileInfoType = {
    saveProfile : ( dataForm : ProfileType) => Promise<any>
    profile : ProfileType
    savePhoto: ( file : File) => void
    status : string
    updateStatusProfileThunk : (status : string) => void
    isOwner : boolean
}

let MyProfileInfo : React.FC<MyProfileInfoType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    let edithMode = () => {
        setEditMode(!editMode);
    }

    let onSubmit = (dataForm: ProfileType) => {
        // todo : remove then
        props.saveProfile(dataForm)

            .then(() => {
                setEditMode(!editMode)
            })
    }


    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={style.containerProfile}>

            <div className={style.profileInfoStatus}>
                <div>
                    <img className={style.imgUser}
                         src={props.profile.photos?.large !== null ? props.profile.photos?.small : avatarImages}
                         alt="img" />

                </div>
                <div className={style.userInfo}>
                    <div>
                        <h1>{props.profile.fullName}</h1>
                    </div>

                    <ProfileStatus status={props.status}
                                   updateStatusProfileThunk={props.updateStatusProfileThunk}
                    />
                </div>

                <div>{props.isOwner ? <input type={"file"} onChange={onMainPhotoSelector}/> : ""}</div>

            </div>

            {editMode ?
                <ProfileDataFormRedux
                    profile={props.profile}
                    isOwner={props.isOwner}
                    edithMode={edithMode}
                    onSubmit={onSubmit}


                />
                :
                <ProfileData profile={props.profile}
                             isOwner={props.isOwner}
                             edithMode={edithMode}
                />}

        </div>
    )
}



// Information user

type ProfileDataPropsType ={
    profile : ProfileType
    isOwner : boolean
    edithMode : () => void

}

const ProfileData : React.FC<ProfileDataPropsType> = ({profile,edithMode,isOwner}) => {
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

                    { (Object.keys(ObjKeysProfileContacts) as Array<keyof typeof ObjKeysProfileContacts>).map((el,id) =>{
                        return (
                            <li key={id}><b>{el}:</b><br/>
                                {ObjKeysProfileContacts[el] ? ObjKeysProfileContacts[el] : "...."}
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
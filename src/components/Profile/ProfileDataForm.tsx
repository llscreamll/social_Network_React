import React from "react";
import {createField, Input, Textarea} from "../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../Common/FormsControls/FormsControlsClass.module.css";
import {contactsType, GetStringKeys, ProfileType} from "../../types/types";


type PropsType= {
    profile : ProfileType
    isOwner : boolean
    edithMode : () => void
}
export type ProfileDataFormType={
    fullName : string
    lookingForAJob : string
    lookingForAJobDescription : string
    aboutMe : string
    contacts : contactsType
}

type ProfileDataFormTypeKeys = GetStringKeys<ProfileDataFormType>

let ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit,profile,error,edithMode,isOwner}) => {

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <b>Full name</b> : {createField<ProfileDataFormTypeKeys>("Full name","fullName",[],Input,{},"")}
                </div>
                <div>
                    <b>Looking for a job:</b>
                    {createField<ProfileDataFormTypeKeys>("","lookingForAJob",[],Input,{type:"checkbox"},"")}
                </div>
                <div>
                   <b> My professional skills</b>
                    {createField<ProfileDataFormTypeKeys>("My professional skills","lookingForAJobDescription",[],Textarea,{},"")}
                </div>
                <div>
                   <b>About me:</b>
                    {createField<ProfileDataFormTypeKeys>("aboutMe","aboutMe",[],Textarea,{},"")}
                </div>
                <div>
                    {Object.keys(profile.contacts).map((el,id)=>{
                        return(
                            // todo update form
                            <div key={id}><b>{el}:</b>   {createField(`${el}`,`contacts.${el}`,[],Input,{},"")}</div>
                            )
                    })}

                </div>

                {error ? <div className={style.formSummaryError}>{error}</div> : ""}

                <button>Save</button>
            </form>
            {isOwner
                ? <div><button onClick={edithMode}>Close</button></div>
                : ""}
        </div>
    )
}


const ProfileDataFormRedux = reduxForm<ProfileType,PropsType>({form: "profileEdit"})(ProfileDataForm)


export default ProfileDataFormRedux

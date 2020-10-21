import React from 'react'
import { ProfileType } from '../../types/types';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import  MyProfileInfo from "./MyProfileInfo"

type ProfileTypes = {
    saveProfile : ( dataForm : ProfileType) => Promise<any>
    profile : ProfileType
    savePhoto: ( file : File) => void
    status : string
    updateStatusProfileThunk : (status : string) => void
    isOwner : boolean
}
const Profile: React.FC<ProfileTypes> = (props) => {

    return (

        <>

          <MyProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatusProfileThunk={props.updateStatusProfileThunk}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
          />
          <MyPostsContainer />
          </>


    )
}

export default Profile;
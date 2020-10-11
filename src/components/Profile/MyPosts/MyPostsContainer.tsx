import React from "react";
import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import { AppStateType } from "../../../redux/redux-store";

export type PropsContainerType = ReturnType<typeof mapStatePostProps> & MyPostsContainerType

type MyPostsContainerType ={
    deletePost: (postId : string) => void
    addPostActionCreator: (postText : string) => void
}

    let MyPostsContainer : React.FC<PropsContainerType> = (props) => {

        return <MyPosts
            posts={props.posts}
            deletePost={props.deletePost}
            addPostActionCreator={props.addPostActionCreator}/>
    }

    let mapStatePostProps = (state : AppStateType) => {
        return {
            posts: state.profilePages.posts
        }
    }

    export default compose<React.ComponentType>(
        connect(mapStatePostProps, {addPostActionCreator : actions.addPostActionCreator,deletePost : actions.deletePost})
    )(MyPostsContainer)
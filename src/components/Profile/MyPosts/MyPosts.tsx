import React from 'react'
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, Textarea} from "../../Common/FormsControls/FormsControls";
import {GetStringKeys, postType} from "../../../types/types";


const maxLengthCreator500 = maxLengthCreator(500)


type MyPostsTypes ={
    addPostActionCreator : (postText : string) => void
    posts : postType[]
    deletePost : (postId : string) => void
}


const MyPosts: React.FC<MyPostsTypes> = (props) => {

    let newPostValue = (post: PostTextValuesType) => {
        props.addPostActionCreator(post.postText);
        post.postText = "";
    }


    return (
        <div className={style.posts}>
            <i><h2>My posts:</h2></i>
            <AddNewPostFormText onSubmit={newPostValue}/>
            <div className={style.postItem}>
                {props.posts.map((el) => <Post key={el.id}
                                                    posts={el.mes}
                                                    id={el.id}
                                                    like={el.like}
                                                    deletePost={props.deletePost}
                />)}

            </div>
        </div>

    )
}


type OwnPropsType = {}
type PostTextValuesType = {
    postText: string
}
type LoginFormValuesTypeKeys = GetStringKeys<PostTextValuesType>


let AddNewPostForm: React.FC<InjectedFormProps<PostTextValuesType, OwnPropsType & OwnPropsType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={style.text}>
                {createField<LoginFormValuesTypeKeys>("your news...", "postText", [required, maxLengthCreator500], Textarea)}
            </div>
            <button>Add post</button>
        </form>
    )
}


let AddNewPostFormText = reduxForm<PostTextValuesType, OwnPropsType>({form: "newPost"})(AddNewPostForm)

export default MyPosts;
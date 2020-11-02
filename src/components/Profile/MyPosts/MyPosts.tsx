import React from 'react'
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, Textarea} from "../../Common/FormsControls/FormsControls";
import {GetStringKeys, postType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import { AppStateType } from '../../../redux/redux-store';
import {actions} from "../../../redux/profile-reducer";


const maxLengthCreator500 = maxLengthCreator(500)

const MyPosts: React.FC = (): React.ReactElement => {

    const posts = useSelector((state:AppStateType) => state.profilePages.posts)
    const dispatch = useDispatch()

    let newPostValue = (post: PostTextValuesType) => {
        dispatch(actions.addPostActionCreator(post.postText));
        post.postText = "";
    }


    return (
        <div className={style.posts}>
            <i><h2>My posts:</h2></i>
            <AddNewPostFormText onSubmit={newPostValue}/>
            <div className={style.postItem}>
                {posts.map((el) => <Post key={el.id}
                                                    posts={el.mes}
                                                    id={el.id}
                                                    like={el.like}
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
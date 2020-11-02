import React from 'react'
import style from "./Post.module.css";
import userImg from "../../../images/avatar.jpg"
import {useDispatch} from "react-redux";
import {actions} from "../../../../redux/profile-reducer";
import {Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


type PostType ={
    posts : string
    like : number
    id : number
}
const Post : React.FC<PostType>= (props) => {

    const dispatch = useDispatch()

    let postDelete = (postId : number) =>{
        dispatch(actions.deletePost(postId))

    }


    return (
        <div className={style.post}>
            <div>
            <img style={{width:'70px'}} src={userImg} alt="" />
            </div>
            <div className={style.messagePost}>
            <div>
            <p>{props.posts}</p>
            </div>
            <div>

                <IconButton
                    color={"secondary"}
                    aria-label="delete"
                    onClick={()=>{postDelete(props.id)}}
                >
                    <DeleteIcon
                        color={"secondary"}
                        fontSize="default" />
                </IconButton>
                <IconButton
                    color={"primary"}
                    aria-label="delete"
                >
                    <ThumbUpAltIcon
                        color={"primary"}
                        fontSize="default" />
                </IconButton>
            </div>
            </div>
        </div>

    )
}

export default Post;
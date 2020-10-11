import React from 'react'
import style from "./Post.module.css";
import userImg from "../../../images/avatar.jpg"


type PostType ={
    deletePost: (postId : string) => void
    posts : string
    like : number
    id : number
}
const Post : React.FC<PostType>= (props) => {

    let postDelete = (postId : any) =>{
        props.deletePost(postId)

    }


    return (
        <div className={style.post}>
            <div>
            <img src={userImg} alt="" />
            </div>


            <div className={style.messagePost}>
            <div>
            <p>{props.posts}</p>
            </div>
            <div>
                <button>Like {props.like}</button>
                <button className={style.deleteButton} onClick={()=>{postDelete(props.id)}}>Delete</button>
            </div>
            </div>
        </div>

    )
}

export default Post;
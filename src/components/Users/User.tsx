import React from 'react';
import avatar from "../images/avatar.jpg"
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        width: 200,
        textAlign:'center',
    },
    media: {
        height: 180,
    },


});
type PropsType = {
    user: UserType
    isAuth: boolean
    followingProgress: Array<number>
    followUsers: (userId: number) => void
    unFollowUsers: (userId: number) => void
}

let User: React.FC<PropsType> = ({user, followingProgress, followUsers, unFollowUsers, isAuth}) => {

    const classes = useStyles();


    return (
        <>
            <Card className={classes.root}>
                <NavLink to={`/profile/${user.id}`}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={user.photos.small != null ? user.photos.small : avatar}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {user.status}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </NavLink>
                <CardActions style={{justifyContent:'center'}}>
                    {isAuth ? <div>
                            {user.followed ?
                                <Button size="small" color="secondary" variant={"outlined"} disabled={followingProgress.some(id => id === user.id)}
                                        onClick={
                                            () => {
                                                unFollowUsers(user.id)
                                            }
                                        }>Отписаться</Button> :
                                <Button size="small" color={"primary"} variant={"outlined"} disabled={followingProgress.some(id => id === user.id)} onClick={
                                    () => {
                                        followUsers(user.id)
                                    }
                                }>Подписаться</Button>}
                        </div>
                        : <button disabled={true}>Подписаться</button>}
                </CardActions>
            </Card>

        </>
    )
}

export default User;
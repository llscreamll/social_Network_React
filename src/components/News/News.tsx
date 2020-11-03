import React from 'react';
import {Typography} from "@material-ui/core";

export default function News() {
    return (
        <div>
        <Typography color={"primary"} variant={"h6"}>News: </Typography>
    <Typography variant={"body2"}>in development..., but for now, random photos</Typography>
           <img style={{width:'100%'}} src="https://source.unsplash.com/random" />
        </div>
    )
}


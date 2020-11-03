import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        root: {
            position:"absolute",
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            },
        },
    }),
);

let Preloader  =  () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>

    )
}
export default Preloader ;
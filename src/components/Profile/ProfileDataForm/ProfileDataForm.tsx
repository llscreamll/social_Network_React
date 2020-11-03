import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../Common/FormsControls/FormsControlsClass.module.css";
import {contactsType, GetStringKeys, ProfileType} from "../../../types/types";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import {Grid} from "@material-ui/core";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    edithMode: () => void
    infoUser: string
}
export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: string
    lookingForAJobDescription: string
    aboutMe: string
    contacts: contactsType
}


type ProfileDataFormTypeKeys = GetStringKeys<ProfileDataFormType>

let ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({infoUser, handleSubmit, profile, error, edithMode, isOwner}) => {

    return (
        <Paper variant="outlined" elevation={3}>
            <form>
                <Grid container xs={12} className={infoUser}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography variant={"h6"} color={"primary"}>
                                AboutMe:
                            </Typography>
                            <Typography variant={"body2"}>
                                {createField<ProfileDataFormTypeKeys>("aboutMe", "aboutMe", [], Textarea, {}, "")}
                            </Typography>
                            <Typography variant={"h6"} color={"primary"}>
                                Full name:
                            </Typography>
                            <Typography variant={"body2"}>
                                {createField<ProfileDataFormTypeKeys>("Full name", "fullName", [], Input, {}, "")}
                            </Typography>
                            <Typography variant={"h6"} color={"primary"}>
                                Contacts:
                            </Typography>
                            {Object.keys(profile.contacts).map((el, id) => {
                                return (
                                    <List
                                        key={id}><b>{el}:</b> {createField(`${el}`, `contacts.${el}`, [], Input, {}, "")}
                                    </List>
                                )
                            })}

                            <Typography variant={"h6"} color={"primary"}>
                                Looking for a job:
                            </Typography>
                            <Typography variant={"body2"}>
                                {createField<ProfileDataFormTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"}, "")}
                            </Typography>
                            <Typography variant={"h6"} color={"primary"}>
                                Explanation:
                            </Typography>
                            <Typography variant={"body2"}>
                                {createField<ProfileDataFormTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea, {}, "")}
                            </Typography>
                            {error && <div className={style.formSummaryError}>{error}</div>}
                        </CardContent>
                    </Grid>
                    <Grid container item xs={6}>
                        <Grid xs={5}></Grid>
                        <Grid xs={7}>
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button color={"primary"} onClick={handleSubmit}><SaveIcon/></Button>
                                <Button color={"secondary"} onClick={edithMode}> <CloseIcon/></Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}


const ProfileDataFormRedux = reduxForm<ProfileType, PropsType>({form: "profileEdit"})(ProfileDataForm)


export default ProfileDataFormRedux

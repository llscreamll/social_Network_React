import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateStatusProfileThunk} from "../../../redux/profile-reducer";
import {Card} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

type PropsType = {
    status: string

}
const ProfileStatus: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = (e: { currentTarget: { value: string; }; }) => {
        if (props.status !== e.currentTarget.value && e.currentTarget.value !== "") {
            dispatch(updateStatusProfileThunk(e.currentTarget.value))
        }
        setEditMode(false);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    return (
        <>
            {!editMode &&
            <Card>
                <span>Status:</span> <span onClick={activateMode}>{status || "Enter your status"}</span>
            </Card>
            }{editMode &&
        <form noValidate autoComplete="off">
            <TextField
                autoFocus
                onBlur={deactivateEditMode}
                onChange={onStatusChange}
                id="standard-basic"
                label="Standard"
            />
        </form>

        }
        </>
    )
}
export default ProfileStatus;
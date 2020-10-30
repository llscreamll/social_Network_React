import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { updateStatusProfileThunk } from "../../redux/profile-reducer";

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
    const deactivateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.status !== e.currentTarget.value) {
            dispatch(updateStatusProfileThunk(e.currentTarget.value))
        }
        setEditMode(false);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    return (
        <div>
            {!editMode &&
            <div>
                <b><i>Status:</i></b> <span onDoubleClick={activateMode}>{status || "Enter your status"}</span>
            </div>
            }{editMode &&
        <div>
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   onChange={onStatusChange}
                   value={status}
            />
        </div>
        }
        </div>
    )
}
export default ProfileStatus;
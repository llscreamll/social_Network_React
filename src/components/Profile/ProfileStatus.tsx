import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatusProfileThunk: (status: string) => void
}
const ProfileStatus: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.status !== e.currentTarget.value) {
            props.updateStatusProfileThunk(e.currentTarget.value)
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
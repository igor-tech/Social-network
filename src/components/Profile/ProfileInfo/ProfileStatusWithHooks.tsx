import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = ({status, updateStatus} :ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [currentStatus, setCurrentStatus] = useState(status)
    const activateEditMode = () => {
        setCurrentStatus(status)
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(currentStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'Write you status'}</span>
                </div>
            }

            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus value={currentStatus}/>
                </div>
            }
        </div>
    )
}



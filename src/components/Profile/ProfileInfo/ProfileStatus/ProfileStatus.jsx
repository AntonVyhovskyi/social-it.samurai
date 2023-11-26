import React, { useState } from "react";
import cls from './ProfileStatus.module.scss'
import Preloader from "../../../commons/preloader/Preloader";

const ProfileStatus = (props) => {
  
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    
    const deactivateEditMode = () => {
        props.updateUserStatus(status)
        setEditMode(false)
    }

    const changeInput = (e) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <div>
              {
            
               (props.statusUpdateStatus && <Preloader/> )

                || 

               ( !editMode &&
                    <div className={cls.profileDescr} >
                        <span onDoubleClick={activateEditMode}>{props.status  || "нема статуса"}</span>
                    </div> )

                ||
                    
               ( editMode &&
                    <div className={cls.profileDescr} >
                        <input onBlur={deactivateEditMode} onChange={changeInput}  autoFocus={true} value={status}/>
    
                    </div>)
                
              }
            
           </div>


        )
    
}

export default ProfileStatus;
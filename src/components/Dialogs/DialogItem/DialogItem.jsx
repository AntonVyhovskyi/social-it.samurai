import cls from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={cls.name}>
            <NavLink to={"/dialogs/" + props.id} className={cls.nameLink}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
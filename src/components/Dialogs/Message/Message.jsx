import cls from './Message.module.css'



const Message = (props) => {
    return (
        <div className={cls.masage}>
            <div className={cls.masageName}>{props.name}</div>
            <div className={cls.masageText}>{props.text}</div>
        </div>
    )
}

export default Message;
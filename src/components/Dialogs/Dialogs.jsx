import cls from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {Navigate} from 'react-router-dom'
import { Field, Form } from 'react-final-form';


const Dialogs = (props) => {


    

    let dialogsElements = props.dialogsPage.dialogsData.map( el => (
        <DialogItem name={el.name} id={el.id}/>
    ) )
    
    
    
    let messagesElements = props.dialogsPage.messagesData.map(el=>(
        <Message id={el.id} name={el.name} text={el.text} />
    ))

    const onSubmit = (formData, form) => {
        props.addMessageActionCreator(formData.newText)
        form.reset();
      }
      const validate = (e) => {
        
      }

    if (props.isAuth === false) return <Navigate to={'/login'} />
    return (
      <div className={cls.container}>
        <div className={cls.names}>
            {
                dialogsElements
            }
            

        </div>
        <div className={cls.dialog}>
            <div className="dialogMasages">
                {
                    messagesElements
                }
            </div>

            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={cls.dialogSend}>
                        <div className={cls.dialogSendTextarea}>
                            <Field name="newText" component="textarea" />
                        </div>                    
                        <button type="submit">Надіслати Повідомлення</button>
                    </form>
                )}
            />
            
        </div>
      </div>
    )
};

export default Dialogs;
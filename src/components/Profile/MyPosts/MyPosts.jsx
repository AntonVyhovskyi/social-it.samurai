import { Field, Form } from 'react-final-form';
import cls from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
 
  let postsElements = props.postData.map(el=>(
    <Post message={el.message} like={el.like} />
  ))

  const onSubmit = (formData, form) => {
    props.addPostActionCreator(formData.newText)
    form.reset();
  }
  const validate = (e) => {
    
  }
  console.log('render');
    return (
      <div className={cls.container}>
        <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={cls.form}>
                        <div>
                            <Field name="newText" component="textarea" />
                        </div>                    
                        <button type="submit">Добавити пост</button>
                    </form>
                )}
            />
        {postsElements}


        
      </div>

      
    )
};

export default MyPosts;
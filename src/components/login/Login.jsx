
import React from "react"
import { Form, Field } from "react-final-form"
import { Navigate } from "react-router-dom"
import cls from "./Login.module.scss"

const Login = (props) => {

    const onSubmit = (e) => {
        props.logIn(e)
    }
    const validate = (values) => {
        const errors = {};

        if (!values.login) {
            errors.login = 'Обязательное поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
            errors.login = 'Неверный формат Email';
        }

        if (!values.password) {
            errors.password = 'Обязательное поле';
        } else if (values.password.length < 6) {
            errors.password = 'Пароль должен содержать не менее 6 символов';
        }

        return errors;
    }
    const CreateField = (label, name, type, placeholder) => {
        return  <div>
                    <Field name={name}>
                        {({ input, meta }) => (
                            <div className={cls.divForInput}>
                                <input type={type} {...input} placeholder={placeholder} />
                                {meta.error && meta.touched && <span className={cls.mandatoryField}>{meta.error}</span>}
                                <label>{label}</label>
                            </div>
                        )}
                    </Field>


                </div>
    }
    return (


        <div className={cls.form__container}>

            {!props.auth && <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={cls.form}>
                        <h1>Вхід в аккаунт</h1>
                        {props.loginFall === 1 ? <h2>Неправильний логін чи пароль</h2> : props.loginFall === 2 ? <h2>Captcha помилка</h2> : null}
                        {CreateField('Логін', 'login', 'email', ' ' )}
                        {CreateField('Пароль', 'password', 'password', ' ' )}
                        <button type="submit">Увійти</button>
                    </form>
                )}
            />}
            {
                props.auth && <Navigate to={'/profile'} />
            }

        </div>
    )

}

export default Login;
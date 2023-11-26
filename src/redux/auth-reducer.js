import { authAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_LOGIN_FALL = 'SET_LOGIN_FALL'


let initialState = {

    email: null,
    id: null,
    login: null,
    isAuth: false,
    loginFall: 0


}


const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_IS_AUTH:
                return {
                    ...state,
                    isAuth: false
                }
            case SET_LOGIN_FALL:
                    return {
                        ...state,
                        loginFall: action.value
                    }
                


        default:
            return state;
    }
}



export const setAuthUserData = (email, id, login) => ({ type: SET_USER_DATA, data: { email, id, login } })
export const setIsAuth = () => ({type:SET_IS_AUTH})
export const setLoginFall = (value) => ({type:SET_LOGIN_FALL, value})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
        if (response.data.resultCode === 0) {
          let {email, id, login} = response.data.data
          dispatch(setAuthUserData(email, id, login))
          
        }
        
       
}

export const logIn = (e) => async (dispatch) => {
    let response = await authAPI.login(e)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(setLoginFall(0))
        }  else  if (response.data.resultCode===1) {
            dispatch(setLoginFall(1))
        } else {
            dispatch(setLoginFall(2))
        } 
}

export const unlogin = () => async (dispatch) => {
    let response = await authAPI.unlogin()
        if (response.data.resultCode === 0 || response.data.resultCode) {
            dispatch(getAuthUserData())
            dispatch(setIsAuth())
        }
}

export default authReducer;
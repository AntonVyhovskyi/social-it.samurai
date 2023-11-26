import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'
const GET_STATUS = 'GET_STATUS'
const GET_STATUS_UPDATE_STATUS = 'GET_STATUS_UPDATE_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    postData: [
        { id: 1, message: 'hi, how are you?', like: 15 },
        { id: 2, message: 'it is my first post', like: 33 },
        { id: 3, message: 'it is my first post', like: 11 },
        { id: 4, message: 'it is my first post', like: 32 },
        { id: 5, message: 'asdasdsad', like: 22 }
    ],

    profile: null,
    status: '',
    statusUpdateStatus: false
}


const profileReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {
                    id: 6,
                    message: action.text,
                    like: 0
                }]
            }

        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case GET_STATUS_UPDATE_STATUS:
            return {
                ...state,
                statusUpdateStatus: action.yesOrNo
            }

        default: {
            return state;
        }
    }

}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updateStatus = (status) => ({ type: UPDATE_USER_STATUS, status })

export const getStatus = (status) => ({ type: GET_STATUS, status })

export const setStatusUpdateStatus = (yesOrNo) => ({ type: GET_STATUS_UPDATE_STATUS, yesOrNo })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });

}

export const updateUserStatus = (status) => async (dispatch) => {
    dispatch(setStatusUpdateStatus(true))
    let response = await profileAPI.updateStatus(status)
        if (!response.data.resultCode) {
            dispatch(updateStatus(status))
            dispatch(setStatusUpdateStatus(false))


        }
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(getStatus(response.data))
    
}

export default profileReducer;
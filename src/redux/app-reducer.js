import { getAuthUserData } from "./auth-reducer";



const SET_UPLOAD_DATA_STATUS = 'SET_UPLOAD_DATA_STATUS'

let initialState = {

    uploadDataStatus: false


}


const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_UPLOAD_DATA_STATUS:
            return {
                ...state,
                uploadDataStatus: true
            }
            

        default:
            return state;
    }
}



export const setUploadDataStatus = () => ({ type: SET_UPLOAD_DATA_STATUS})

export const setUploadDataStatusWithGetUserData = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=> {
        dispatch(setUploadDataStatus())
    })

}



export default appReducer;
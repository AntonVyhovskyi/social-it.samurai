import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store ={
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'hi, how are you?', like: 15 },
                { id: 2, message: 'it is my first post', like: 33 },
                { id: 3, message: 'it is my first post', like: 11 },
                { id: 4, message: 'it is my first post', like: 32 },
                { id: 5, message: 'asdasdsad', like: 22 }
            ],
    
            newPostText: 'it kamasutra'
    
    
        },
        
        dialogsPage: {
            messagesData: [
                { id: 1, name: 'Anton', text: 'Hello how are you' },
                { id: 2, name: 'Yulia', text: 'Hallo I am fine.' },
                { id: 3, name: 'Anton', text: 'Mersedes buy' },
                { id: 4, name: 'Yulia', text: 'Your data rendering ost so good' },
                { id: 5, name: 'Yulia', text: 'ist*)))' }
            ],
    
            dialogsData: [
                { id: 1, name: 'Anton' },
                { id: 2, name: 'Yulia' },
                { id: 3, name: 'Vova' },
                { id: 4, name: 'Igor' },
                { id: 5, name: 'Yura' },
                { id: 6, name: 'Oleg' }
            ],
    
            newMessageText: 's'
        }, 
        sidebar: {}
    
    },

    _callSubscriber() {
        console.log('state changed');
    },



    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    getState() {
        return this._state;
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar =  sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 6,
        //         message: this._state.profilePage.newPostText,
        //         like: 0
        //     }
        //     this._state.profilePage.postData.push(newPost);
        //     this._callSubscriber(this._state);
        //     this._state.profilePage.newPostText = ('');
        
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: 22,
        //         name: 'Anton',
        //         text: this._state.dialogsPage.newMessageText
        //     };
        //     this._state.dialogsPage.messagesData.push(newMessage);
        //     this._callSubscriber(this._state);
        //     this._state.dialogsPage.newMessageText = ('');
        // }
    },

    
}





export default store;
window.store = store;

















// перед рефакторингом




// let rerenderEntireTree = () => {
//     console.log('state changed');
// }


// let state = {
//     profilePage: {
//         postData: [
//             { id: 1, message: 'hi, how are you?', like: 15 },
//             { id: 2, message: 'it is my first post', like: 33 },
//             { id: 3, message: 'it is my first post', like: 11 },
//             { id: 4, message: 'it is my first post', like: 32 },
//             { id: 5, message: 'asdasdsad', like: 22 }
//         ],

//         newPostText: 'it kamasutra'


//     },
    
//     dialogsPage: {
//         messagesData: [
//             { id: 1, name: 'Anton', text: 'Hello how are you' },
//             { id: 2, name: 'Yulia', text: 'Hallo I am fine.' },
//             { id: 3, name: 'Anton', text: 'Mersedes buy' },
//             { id: 4, name: 'Yulia', text: 'Your data rendering ost so good' },
//             { id: 5, name: 'Yulia', text: 'ist*)))' }
//         ],

//         dialogsData: [
//             { id: 1, name: 'Anton' },
//             { id: 2, name: 'Yulia' },
//             { id: 3, name: 'Vova' },
//             { id: 4, name: 'Igor' },
//             { id: 5, name: 'Yura' },
//             { id: 6, name: 'Oleg' }
//         ],

//         newMessageText: 's'
//     }

// }
// window.state = state
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const addPost = () => {
//     let newPost = {
//         id: 6,
//         message: state.profilePage.newPostText,
//         like: 0
//     }
//     state.profilePage.postData.push(newPost);
//     rerenderEntireTree(state);
//     updateNewPostText('')
// }


// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }



// export let updateNewMessageText = (newText) =>{
//     state.dialogsPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }

// export let addMessage = () => {
//     let newMessage = {
//         id: 22,
//         name: 'Anton',
//         text: state.dialogsPage.newMessageText
//     };
//     state.dialogsPage.messagesData.push(newMessage);
//     rerenderEntireTree(state);
//     updateNewMessageText('');
// }




// refactor DISPATCH

    // addPost() {
    //     let newPost = {
    //         id: 6,
    //         message: this._state.profilePage.newPostText,
    //         like: 0
    //     }
    //     this._state.profilePage.postData.push(newPost);
    //     this._callSubscriber(this._state);
    //     this.updateNewPostText('')
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // updateNewMessageText(newText) {
    //         this._state.dialogsPage.newMessageText = newText;
    //         this._callSubscriber(this._state);
    // },

    // addMessage() {
    //     let newMessage = {
    //         id: 22,
    //         name: 'Anton',
    //         text: this._state.dialogsPage.newMessageText
    //     };
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._callSubscriber(this._state);
    //     this.updateNewMessageText('');
    // },

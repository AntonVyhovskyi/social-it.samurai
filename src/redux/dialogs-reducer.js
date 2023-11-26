const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialDialogs = {
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
}

const dialogsReducer = (state = initialDialogs, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:{

            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case ADD_MESSAGE: {

            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {
                    id: 22,
                    name: 'Anton',
                    text: action.text
                }]
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, text});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;
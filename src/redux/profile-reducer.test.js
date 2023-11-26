import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


test('new post should be added', () => {
    // 1. test data
    let state = {
        postData: [
            { id: 1, message: 'hi, how are you?', like: 15 },
            { id: 2, message: 'it is my first post', like: 33 },
            { id: 3, message: 'it is my first post', like: 11 },
            { id: 4, message: 'it is my first post', like: 32 },
            { id: 5, message: 'asdasdsad', like: 22 }
        ]
    } 
    let action = addPostActionCreator('it-komosutra')
    // 2. action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.postData.length).toBe(6)
  });

test('new post text should be correct', () => {
// 1. test data
let state = {
    postData: [
        { id: 1, message: 'hi, how are you?', like: 15 },
        { id: 2, message: 'it is my first post', like: 33 },
        { id: 3, message: 'it is my first post', like: 11 },
        { id: 4, message: 'it is my first post', like: 32 },
        { id: 5, message: 'asdasdsad', like: 22 }
    ]
} 
let action = addPostActionCreator('it-komosutra')
// 2. action
let newState = profileReducer(state, action);
// 3. Expectation
expect(newState.postData[5].message).toBe('it-komosutra')
});

test('post should be deleted', () => {
    // 1. test data
    let state = {
        postData: [
            { id: 1, message: 'hi, how are you?', like: 15 },
            { id: 2, message: 'it is my first post', like: 33 },
            { id: 3, message: 'it is my first post', like: 11 },
            { id: 4, message: 'it is my first post', like: 32 },
            { id: 5, message: 'asdasdsad', like: 22 }
        ]
    } 
    let action = deletePost(2)
    
    // 2. action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.postData.length).toBe(4)
    });
    



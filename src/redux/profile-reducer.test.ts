import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";

let state = {
    posts: [
        { id: 1, like: 15, mes: "hello!" },
        { id: 2, like: 10, mes: "how are you doing?" },
        { id: 3, like: 5, mes: "checking messages" },
        { id: 4, like: 31, mes: "I see you =)" }
    ],
    newPostText: "",
    profile: null as ProfileType | null,
    preloaderUsers: false as true | false,
    status: null as string | null
};

test('length of post should be incremented', () => {

    // 1. test data
    let action = actions.addPostActionCreator("IT-CAMASUTRA.COM")
    // 2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(5)
});

test('length of post should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("IT-CAMASUTRA.COM")
    // 2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts[4].mes).toBe("IT-CAMASUTRA.COM")
})

test('Delete post', () => {
    // 1. test data
    let action = actions.deletePost(1)
    // 2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(3)
});

test('deleting a post with an incorrect ID', () => {
    // 1. test data
    let action = actions.deletePost(200)
    // 2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(4)
});


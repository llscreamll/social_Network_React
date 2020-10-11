let initialState = {
    friends: [
        { id: 1, user: "Igor" },
        { id: 2, user: "Sveta" },
        { id: 3, user: "Pavel" },],
}

export type initialStateType = typeof initialState
const  sidebarReducer = (state = initialState,action : any) :initialStateType  =>{

    return state;
}

export default  sidebarReducer;
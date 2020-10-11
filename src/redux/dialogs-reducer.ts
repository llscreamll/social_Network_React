import { PropertiesTypes} from "../types/types"

export type initialStateType = typeof initialState

type messagesType = {
    id: number,
    mes: string
}
type usersType = {
    id: number,
    user: string
}
let initialState = {

    messages: [
        {id: 1, mes: "hello!"},
        {id: 2, mes: "how are you doing?"},
        {id: 3, mes: "checking messages"},
        {id: 4, mes: "I see you =)"}
    ] as Array<messagesType>,
    users: [
        {id: 1, user: "Alex"},
        {id: 2, user: "Max"},
        {id: 3, user: "Sergey"},
        {id: 4, user: "Ira"},
    ] as Array<usersType>,

}
const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE" :

            return {
                ...state,
                messages: [...state.messages, {id: 7, mes: action.message}],
                users: [...state.users, {id: 5, user: "You"}]
            }

        default:
            return state;
    }

}
type ActionsType = ReturnType<PropertiesTypes<typeof actions>>



export const actions = {
    addNewMessages : (message: string) => ({type: 'ADD_NEW_MESSAGE', message} as const)
}

export default dialogsReducer;
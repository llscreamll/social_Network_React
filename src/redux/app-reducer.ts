import { PropertiesTypes } from "../types/types";
import {authMeRegister} from "./auth-reducer";


let initialState = {
    initialized: false
}
type initialStateType = typeof initialState

type ActionsType = ReturnType<PropertiesTypes<typeof actions>>

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS" :

            return {...state, initialized: true}
        default:
            return state;
    }
}
const actions = {
    initializedSuccess : () => ({type: 'INITIALIZED_SUCCESS'} as const)
}


export const initializeApp = () => async (dispatch: any) => {
    await dispatch(authMeRegister());
    await dispatch(actions.initializedSuccess());


}
export default appReducer;
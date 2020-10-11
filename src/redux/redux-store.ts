import {applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

import appReducer from "./app-reducer"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sideBar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"




let rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage :usersReducer,
    auth:authReducer,
    appReducer: appReducer,
    form:formReducer
});
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


// export type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
//export type InferActionsType<T extends {[key: string]: (...arg:any[])=> any}> = ReturnType<PropertiesTypes<T>>
// export type InferActionsType<T> = T extends {[key: string]: (...arg:any[])=> infer U}  ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(compose(applyMiddleware(thunk))))


export default store
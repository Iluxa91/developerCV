import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "../features/cvPage/profile-reducer";

const rootReducer = combineReducers({
    userCV:profileReducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
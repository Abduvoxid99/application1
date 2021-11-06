import {combineReducers} from "redux"
import meta from "./meta"
import {application} from "./application.reducer"

export const rootReducer = combineReducers({
    meta,
    application
})
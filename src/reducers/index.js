import { combineReducers } from "redux";
import taskReducer from "./tasks"
import globalLoadingReducer from './globalLoading'
import modelReducer from './model'
const appReducer =  combineReducers({
    taskReducer,
    globalLoadingReducer,
    modelReducer,
})
export default appReducer;
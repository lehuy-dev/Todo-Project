import * as types from '../constants/model/index'
const initialState ={
    showModel: false,
    title:'',
    component:null
}
const modelReducer = (state=initialState, action)=>{
    switch(action.type) {
        case types.SHOW_MODEL:
            return {...state, showModel: true}
        case types.HIDE_MODEL:
            return {...state, showModel: false}
        case types.CHANGE_MODEL_TITLE:
            return {...state, title: action.payload.title}
        case types.CHANGE_MODEL_CONTENT:
            return {...state, component: action.payload.component}
        default:
            return {...state}
    }
}
export default modelReducer
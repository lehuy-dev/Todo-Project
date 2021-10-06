import * as types from '../constants/model/index'

export const showModel = ()=>({
    type: types.SHOW_MODEL
})

export const hideModel = ()=>({
    type: types.HIDE_MODEL
})

export const changeModelTitle = (title)=>({
    type: types.CHANGE_MODEL_TITLE,
    payload:{
        title
    }
})

export const changeModelContent = (component)=>({
    type: types.CHANGE_MODEL_CONTENT,
    payload:{
        component
    }
})
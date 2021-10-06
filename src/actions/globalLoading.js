import * as types from '../constants/Loading/index'
export const actShowLoading = ()=>{
    return {
        type: types.SHOW_LOADING
    }
}
export const actHideLoading = ()=>{
    return {
        type: types.HIDE_LOADING
    }
}
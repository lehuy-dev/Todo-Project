import * as types from '../constants/Loading/index'
const initialState = {
    showLoading: false
}

const globalLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_LOADING:
            return {...state, showLoading: true }
        case types.HIDE_LOADING:
            return {...state, showLoading: false }
        default:
            return { ...state }

    }
}
export default globalLoadingReducer
import * as types from "../constants/Taskboard/index"
import { toastError } from "../utils/helpers/toastify"
const initialState = {
    listTask: []
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_TASK:
            return { ...state, listTask: [] }
        case types.FETCH_TASK_SUCCESS: {
            const { data } = action.payload
            return { ...state, listTask: data }
        }
        case types.FETCH_TASK_FAILURE: {
            const { error } = action.payload
            toastError(error)
            return { ...state, listTask: [] }
        }
        case types.FILTER_TASK:
            return { ...state }
        case types.FILTER_TASK_SUCCESS:
            {
                const {data} = action.payload
                debugger
                console.log({ ...state, listTask: data })
                return { ...state, listTask: data }
            }
        case types.FILTER_TASK_FAILD:
            {
                const errorFilter = action.payload.error
                toastError(errorFilter)
                return { ...state, listTask: [] }
            }
        default:
            return { ...state }
    }
}
export default taskReducer
//import * as taskApis from '../apis/task'
import * as types from '../constants/Taskboard/index'

// export const fetchListTask = ()=>{
//     return  dispatch => {
//         dispatch(actFetchListTask())
//         taskApis.fetchListTask().then((res)=>{
//            dispatch(actFetchListTaskSuccess(res.data))
//         }).catch(err =>{
//             dispatch(actFetchListTaskFailure(err))

//         })
//     }
// }

export const actFetchListTask = ()=>{
    return{
        type: types.FETCH_TASK
    }
}
export const actFetchListTaskSuccess = (data)=>{
    return{
        type: types.FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const actFetchListTaskFailure = (error)=>{
    return{
        type: types.FETCH_TASK_FAILURE,
        payload:{
            error
        }
    }
}

export const actFilterTask = (keyword)=>{
    return{
        type: types.FILTER_TASK,
        payload:{
            keyword
        }
    }
}

export const actFilterTaskSuccess = (data)=>{
    return{
        type: types.FILTER_TASK_SUCCESS,
        payload:{
            data
        }
    }
}

export const actFilterTaskFaild = (error)=>{
    return {
        type: types.FILTER_TASK_FAILD,
        payload:{
            error
        }
    }
}
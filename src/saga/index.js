import * as types from '../constants/Taskboard/index'
import {take,call,put,fork,delay, takeLatest, select} from 'redux-saga/effects'
import {fetchListTask} from '../apis/task'
import {actFetchListTaskFailure,actFetchListTaskSuccess, actFilterTaskSuccess} from '../actions/task'
import { actHideLoading, actShowLoading } from '../actions/globalLoading';
function* watchFetchListTaskAction(){
    while(true){
        yield take(types.FETCH_TASK);
        yield put(actShowLoading())
        const res = yield call(fetchListTask)
        const {status,data} = res;
       
        if(status ===200){
            
            yield put(actFetchListTaskSuccess(data));
        }
        else{
           
            yield put(actFetchListTaskFailure(data));
        }
        yield delay(1000)
        yield put(actHideLoading())
    }
}

function * filterTaskSaga({payload}){
   yield delay(700)
   const list = yield select(state => state.taskReducer.listTask)
   const filtered = list[0];
   yield put(actFilterTaskSuccess( typeof(filtered)==='object'? [filtered]: filtered))


}

function* rootSaga(){
    yield fork(watchFetchListTaskAction)
    yield takeLatest(types.FILTER_TASK,filterTaskSaga)
}
export default rootSaga
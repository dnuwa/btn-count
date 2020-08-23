import { takeEvery, put, call } from 'redux-saga/effects';
import { LOADDATA } from '../actions'
import { getData, errorResponse } from '../actions'
import { fetchGoals } from '../api'


function* workerSaga(){
    //api saga
    try {
        const goals = yield call(fetchGoals);
        yield put(getData(goals));
    } catch (error) {
        // console.log(`logged error ${error}`);
        yield put(errorResponse(error.toString()))
    }
}

export default function* watchValueChange(){
    yield takeEvery(LOADDATA, workerSaga)
}
// Chứa Redux Saga để xử lý side effects.
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTestsPending, getTestsSuccess, getTestsFailure } from './testSlice';
import fetchWithInterceptor from "@/plugin/api/instance";
import {fetchServices} from "@/plugin/service";
const { testService} = fetchServices

export function* helloSaga() {
    console.log('Hello Sagas!')
}
function* fetchUsers() {
    try {
        const users = yield call(testService.testList);
        console.error('tesst: ', users)
        // method mặc định là get
        // với methods khác
        // const newUser = yield call(fetchWithInterceptor, 'https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     data: {
        //         name: 'cak',
        //         email: 'heheheh@example.com',
        //     }
        // });
        yield put(getTestsSuccess(users));
    } catch (error) {
        yield put(getTestsFailure(error.message));
    }
}

export function* testSaga() {
    yield takeLatest(getTestsPending.type, fetchUsers);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        testSaga()
    ])
}
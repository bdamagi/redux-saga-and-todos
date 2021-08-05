import { put, call, takeLatest } from 'redux-saga/effects'

import { GET_TODOS, storeTodos } from '../store/actions'

import * as Api from '../api'

function* getTodos() {
    try {
        const [error,todos] = yield call(Api.Todos.getTodos) 

        if (error) {
            throw new Error(error)
        } else {
            yield put(storeTodos(todos))
        }
    } catch (e) {
        console.log(e)
    }
}

function* mainSaga() {
    try {
        yield takeLatest(GET_TODOS, getTodos)
    } catch (e) {
        console.log(e)
    }
}

export default mainSaga
import { combineReducers } from 'redux'

import { GET_TODOS, STORE_TODOS } from './actions'

const defaultState = {
    todos: [],
    loading: false 
}

const todoApp = (state=defaultState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, loading: true, todos: [] }
        case STORE_TODOS: {
            return { ...state, loading: true, todos: action.todos }
        }
        default: 
            return state 
    }
}

export default combineReducers({
    todoApp
})
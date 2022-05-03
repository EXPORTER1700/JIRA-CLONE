const defaultStore = {
    todos: []
}

const ADD_MANY_TODOS = 'ADD_MANY_TODOS'

export const todosReducer = (store = defaultStore, action) => {
    switch (action.type) {
        case (ADD_MANY_TODOS):
            return {...store, todos: [...state.todos, ...action.payload]}

        default:
            return store
    }
}

export const addManyTodosAction = payload => ({type: ADD_MANY_TODOS, payload})
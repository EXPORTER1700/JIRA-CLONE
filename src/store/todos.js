const defaultStore = {
    todos: []
}

const ADD_MANY_TODOS = 'ADD_MANY_TODOS'
const CHANGE_COMPLETED_TODO = 'CHANGE_COMPLETED_TODO'

const nextCompleted = (completed) => {
    switch (completed) {
        case ('To do'):
            return 'In progress'
        case ('In progress'):
            return 'Done'
        default:
            return completed
    }
}

export const todosReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case (ADD_MANY_TODOS):
            return {...state, todos: [...state.todos, ...action.payload]}
        case (CHANGE_COMPLETED_TODO):
            return {
                ...state,
                todos: [...state.todos.map(todo => todo.id === action.payload ? {
                    ...todo,
                    completed: nextCompleted(todo.completed)
                } : todo)
                ]
            }
        default:
            return state
    }
}

export const addManyTodosAction = payload => ({type: ADD_MANY_TODOS, payload})
export const changeCompletedTodoAction = payload => ({type: CHANGE_COMPLETED_TODO, payload})
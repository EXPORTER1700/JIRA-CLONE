import {useMemo} from "react";

export const useSearchTodo = (todos, search) => {
    const searchedTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    }, [todos, search])
    return searchedTodos
}

export const useTodos = (todos, search, completed) => {
    const searchedTodos = useSearchTodo(todos, search)
    const sortedAndSearchedTodos = useMemo(() => {
        if (completed === 'All') return searchedTodos
        return searchedTodos.filter(todo => todo.completed === completed)
    }, [todos, completed,search])
    return sortedAndSearchedTodos
}
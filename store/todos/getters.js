export default {
    todos: (state) => {
        return state.todos
    },
    doneTodos: (state) => {
        return state.todos.filter((todo) => todo.completed)
    },
}

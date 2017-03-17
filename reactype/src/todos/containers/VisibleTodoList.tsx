import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions'
import { TodoListItem, TodoList } from '../components/TodoList'

const getVisibleTodos = (todos: TodoListItem[], filter: string) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
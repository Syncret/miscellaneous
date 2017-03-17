import * as React from 'react';
import { Todo, TodoProps } from './Todo';

export interface TodoListItem {
    id: number,
    completed: boolean,
    text: string
}

export interface TodoListProps {
    todos: TodoListItem[],
    onTodoClick: (id: number) => void
}

export const TodoList: React.StatelessComponent<TodoListProps> = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

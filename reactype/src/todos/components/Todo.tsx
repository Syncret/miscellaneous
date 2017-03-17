import * as React from 'react';

export interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

export const Todo: React.StatelessComponent<TodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

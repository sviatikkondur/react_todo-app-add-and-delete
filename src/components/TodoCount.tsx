import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const TodoCount: React.FC = () => {
  const { todos } = useContext(TodosContext);
  const todosLeft = todos.filter(todo => !todo.completed).length;

  // fix items later
  const countTitle = `${todosLeft} ${todosLeft === 1 ? 'items' : 'items'} left`;

  return (
    <span className="todo-count" data-cy="TodosCounter">
      {countTitle}
    </span>
  );
};

import React from "react";
import "./TodoListItems.css";

interface TodoListItemsProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemsProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <ol>
      <div className="todo_style">
        <span className={todo.complete ? "complete" : undefined}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </span>
      </div>
    </ol>
  );
};

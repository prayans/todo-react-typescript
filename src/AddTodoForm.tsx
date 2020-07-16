import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./TodoListItems.css";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Add items"
      />
      <Button className="newBtn" onClick={handleSubmit}>
        <AddIcon />
      </Button>
    </form>
  );
};

import React from "react";
import { TodoProps } from "../types";

const Todo = (props: TodoProps) => {
  const { id, title } = props.todo;
  const deleteTodo = (id: string) => {
    props.handleDeleteTodo(id);
  };
  return (
    <article className="todo">
      <h3>{id}</h3>
      <h3>{title}</h3>
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
    </article>
  );
};

export default Todo;

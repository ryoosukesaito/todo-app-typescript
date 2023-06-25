import React from "react";
import Todo from "./Todo";
import { TodosProps } from "../types";

const Todos = (props: TodosProps) => {
  console.log(props.todos);
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </section>
  );
};

export default Todos;

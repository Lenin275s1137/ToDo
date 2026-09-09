import React from "react";
import OneTask from "./OneTask";

const TaskList = ({showTodos, deleteTodo, toggleTodo}) => {
  return (
    <div>
      <ul className="container">
        {showTodos.map((todo) => {
          return (
           <OneTask todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

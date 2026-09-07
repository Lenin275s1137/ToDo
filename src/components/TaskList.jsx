import React from "react";
import OneTask from "./OneTask";

const TaskList = ({showTodos}) => {
  return (
    <div>
      <ul className="container">
        {showTodos.map((todo) => {
          return (
           <OneTask todo={todo} key={todo.id}/>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

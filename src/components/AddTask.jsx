import React, { useState } from "react";

export const AddTask = ({ addTodo }) => {
  const [taskTitle, setTaskTitle] = useState("");
  return (
    <div className="container">
      <form class="input-group mb-3">
        <input
          class="form-control"
          value={taskTitle}
          onChange={(event) => {
            setTaskTitle(event.target.value);
          }}
          placeholder="Введите название нового дела"
        />
        <div class="input-group-append">
          <button
            onClick={(event) => {
              event.preventDefault();
              const newTask = {
                id: Date.now(),
                title: taskTitle,
                completed: false,
                deadline: new Date().toLocaleDateString(),
              };
              addTodo(newTask);

              setTaskTitle("");
            }}
            class="btn btn-primary"
          >
            Добавить дело
          </button>
        </div>
      </form>
    </div>
  );
};

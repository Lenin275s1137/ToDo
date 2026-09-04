import React from "react";

export const AddTask = () => {
  return (
    <div className="container">
      <form class="input-group mb-3">
        <input
          class="form-control"
          placeholder="Введите название нового дела"
        />
        <div class="input-group-append">
          <button class="btn btn-primary">Добавить дело</button>
        </div>
      </form>
    </div>
  );
};

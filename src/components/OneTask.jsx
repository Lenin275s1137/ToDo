import React from 'react'

const OneTask = ({todo, deleteTodo, toggleTodo}) => {
  return (
     <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed === true ? 'list-group-item-success' : ''} ${todo.deadline > new Date().toLocaleDateString()&&todo.completed === false ? 'list-group-item-overdue' : ""}`}>
              {todo.title}
              <div className="btn-group btn-group-sm">
                <fieldset className="fieldset-task-deadline">
                  <legend className="legend-task-deadline">Срок выполнения</legend>
                  <p>{todo.deadline}</p>
                  {/* <input type="date" className="date fake-placeholder" value={todo.deadline}/> */}
                </fieldset>
                <button className="btn btn-success" onClick={()=> {toggleTodo(todo.id)}}>
                  {todo.completed === true ? "Отменить" : "Готово"}
                </button>
                <button className="btn btn-danger" onClick={()=> {deleteTodo(todo.id)}}>Удалить</button>
              </div>
            </li>
  )
}

export default OneTask
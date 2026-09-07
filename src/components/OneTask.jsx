import React from 'react'

const OneTask = ({todo}) => {
  return (
     <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed === true ? 'list-group-item-success' : ''}`}>
              {todo.title}
              <div className="btn-group btn-group-sm">
                <fieldset className="fieldset-task-deadline">
                  <legend className="legend-task-deadline">Срок выполнения</legend>
                  <p>{todo.deadline}</p>
                  {/* <input type="date" className="date fake-placeholder" value={todo.deadline}/> */}
                </fieldset>
                <button className="btn btn-success">
                  {todo.completed === true ? "Отменить" : "Готово"}
                </button>
                <button className="btn btn-danger">Удалить</button>
              </div>
            </li>
  )
}

export default OneTask
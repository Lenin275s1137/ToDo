import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { AddTask } from "./components/AddTask";
import { USERS } from "./const/users";
import TaskList from "./components/TaskList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "first",
      completed: false,
      deadline: "31.08.2026",
      userId: "me",
    },
    {
      id: 2,
      title: "second",
      completed: true,
      deadline: "31.08.2026",
      userId: "me",
    },
    {
      id: 3,
      title: "third",
      completed: true,
      deadline: "31.08.2026",
      userId: "chiefCountry",
    },
  ]);

  const [currentUser, setCurrentUser] = useState(USERS[0].id);
  const showTodos = todos.filter((todo) => {
    return todo.userId === currentUser;
  });

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  function addTodo(newTodo) {
    setTodos([...todos, { ...newTodo, userId: currentUser }]);
  }

  return (
    <div className="App">
      <Header />
      <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <AddTask addTodo={addTodo} />
      <TaskList showTodos={showTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;

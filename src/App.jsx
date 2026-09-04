import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { AddTask } from "./components/AddTask";

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
  ]);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <AddTask />
    </div>
  );
}

export default App;

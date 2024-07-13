import { useState } from "react";
import initialTasks from "../../assets/ListTasks.json";
import Form from "./../Form/Form";
import TaskList from "./../TaskList/TaskList";
import Filter from "./../Filter/Filter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prefTasks) => {
      return [...prefTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prefTasks) => {
      return prefTasks.filter((task) => task.id !== taskId);
    });
  };
  const visibleTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

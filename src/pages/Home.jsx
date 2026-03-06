import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import Column from "../components/Column";
import { sampleTasks } from "../interfaces/task";

function Home() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return sampleTasks;
  });
    useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask = (title, description, status) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    const newTitle = prompt("Yeni görev başlığını girin:", taskToEdit.title);
    const newDescription = prompt(
      "Yeni görev açıklamasını girin:",
      taskToEdit.description
    );

    if (newTitle === null || newDescription === null) return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle.trim() ? newTitle : task.title,
              description: newDescription.trim()
                ? newDescription
                : task.description,
            }
          : task
      )
    );
  };

  const todo = tasks.filter((task) => task.status === "TODO");
  const progress = tasks.filter((task) => task.status === "IN PROGRESS");
  const done = tasks.filter((task) => task.status === "DONE");

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <TaskForm addTask={addTask} />

        <div className="grid gap-6 md:grid-cols-3">
          <Column
            title="TODO"
            tasks={todo}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            editTask={editTask}
          />

          <Column
            title="IN PROGRESS"
            tasks={progress}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            editTask={editTask}
          />

          <Column
            title="DONE"
            tasks={done}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            editTask={editTask}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
      return;
    }

    const loadTasks = async () => {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: token },
      });
      setTasks(res.data);
    };

    loadTasks();
  }, [token]);

  const refreshTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: token },
    });
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: token } }
    );

    setTitle("");
    refreshTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: token },
    });
    refreshTasks();
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Dashboard</h2>

        <div className="add-task">
          <input
            placeholder="Enter task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title}
              <span onClick={() => deleteTask(task._id)}>✕</span>
            </li>
          ))}
        </ul>

        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

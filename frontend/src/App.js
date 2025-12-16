import { useEffect, useState } from "react";
import { api } from "./api";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await api.post("/tasks", {title});
      setTitle("");
      fetchTasks();
    } catch {
      setError("Unable to add task");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setLoading(true);
      setError("");
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch {
      setError("Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <div className="input-box">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask} disabled={loading}>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> :( <><FontAwesomeIcon icon={faCalendarPlus} /> Add</>)}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading"> <FontAwesomeIcon icon={faSpinner} spin /></p>}

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title}
            <button
              onClick={() => deleteTask(task._id)}
              disabled={loading}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Academic",
    dueDate: ""
  });

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      alert("Please fill all required fields");
      return;
    }

    const newTask = {

      ...task,

      id: Date.now(),

      status: "Raised",

      raisedDate: new Date().toLocaleString()

    };

    console.log("New Task:", newTask);

    alert("Task added successfully!");

    navigate("/tasks");
  };

  return (
    <div>

      <h1>Add New Task</h1>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <label>
          Task Header
        </label>

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Enter task title"
        />

        <label>
          Description
        </label>

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
        />

        <label>
          Priority
        </label>

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >

          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>

        </select>

        <label>
          Category
        </label>

        <select
          name="category"
          value={task.category}
          onChange={handleChange}
        >

          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>

        </select>

        <label>
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />

        <button type="submit">
          Add Task
        </button>

      </form>

    </div>
  );
}

export default AddTask;

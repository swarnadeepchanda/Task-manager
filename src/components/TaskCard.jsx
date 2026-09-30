

import { Link } from "react-router-dom";

function TaskCard({ task }) {

  return (
    <div className="task-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Category:</strong> {task.category}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <Link to={`/tasks/${task.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default TaskCard;

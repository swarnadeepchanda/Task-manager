
import { useParams, useNavigate } from "react-router-dom";

function TaskDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <div className="details-container">

      <h1>Task Details</h1>

      <div className="details-card">

        <h2>Task ID: {id}</h2>

        <p>
          This page is using a dynamic route.
        </p>

        <p>
          The task ID was taken from the URL.
        </p>

        <p>
          Example URL:
        </p>

        <code>
          /tasks/{id}
        </code>

        <br />
        <br />

        <button onClick={() => navigate("/tasks")}>
          Back to Tasks
        </button>

      </div>

    </div>
  );
}

export default TaskDetails;
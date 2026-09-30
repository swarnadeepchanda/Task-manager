

import TaskCard from "../components/TaskCard";

function Tasks() {

  const tasks = [
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish Assignment 6 using React Router",
      priority: "High",
      category: "Academic",
      status: "Pending",
      raisedDate: "11 Sep 2026",
      dueDate: "28 Aug 2026"
    },
    {
      id: 2,
      title: "Practice Java DSA",
      description: "Solve 5 array problems",
      priority: "Medium",
      category: "Academic",
      status: "Raised",
      raisedDate: "11 Sep 2026",
      dueDate: "28 Aug 2026"
    },
    {
      id: 3,
      title: "Go to Gym",
      description: "Complete evening workout",
      priority: "Low",
      category: "Personal",
      status: "Pending",
      raisedDate: "11 Sep 2026",
      dueDate: "28 Aug 2026"
    }
  ];

  return (
    <div>

      <h1>All Tasks</h1>

      <div className="task-grid">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </div>
  );
}

export default Tasks;
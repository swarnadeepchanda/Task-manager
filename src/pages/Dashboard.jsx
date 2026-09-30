

function Dashboard() {

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>10</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>5</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>3</h2>
          <p>Completed Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>2</h2>
          <p>High Priority</p>
        </div>

      </div>

      <h2>Welcome to Task Manager</h2>

      <p>
        Manage your academic and personal tasks from one place.
      </p>

    </div>
  );
}

export default Dashboard;
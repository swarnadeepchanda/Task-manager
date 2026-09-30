
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {

//   const navigate = useNavigate();

//   const username = localStorage.getItem("username");

//   const handleLogout = () => {

//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("username");

//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">

//       <h2>Task Manager</h2>

//       <div className="nav-links">

//         <Link to="/">Dashboard</Link>

//         <Link to="/tasks">Tasks</Link>

//         <Link to="/tasks/add">Add Task</Link>

//         <Link to="/completed">Completed</Link>

//         <span>Hello, {username}</span>

//         <button onClick={handleLogout}>
//           Logout
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";


function Navbar() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();


  const handleLogout = () => {

    logout();

    navigate("/login");

  };


  return (

    <nav className="navbar">

      <h2>
        Task Manager
      </h2>


      <div className="nav-links">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        <Link to="/tasks/add">
          Add Task
        </Link>

        <Link to="/completed">
          Completed
        </Link>


        {user && (
          <span>
            Hello, {user.username}
          </span>
        )}


        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>

  );
}

export default Navbar;
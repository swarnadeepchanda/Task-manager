// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Tasks from "./pages/Tasks";
// import AddTask from "./pages/AddTask";
// import TaskDetails from "./pages/TaskDetails";
// import CompletedTasks from "./pages/CompletedTasks";

// import Layout from "./components/Layout";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Routes>

//       {/* Public Route */}
//       <Route path="/login" element={<Login />} />

//       {/* Protected Routes */}
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <Layout />
//           </ProtectedRoute>
//         }
//       >

//         <Route index element={<Dashboard />} />

//         <Route path="tasks" element={<Tasks />} />

//         <Route path="tasks/add" element={<AddTask />} />

//         <Route path="tasks/:id" element={<TaskDetails />} />

//         <Route path="completed" element={<CompletedTasks />} />

//       </Route>

//       {/* Unknown URL */}
//       <Route path="*" element={<Navigate to="/" />} />

//     </Routes>
//   );
// }

// export default App;
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <Routes>

      {/* Public Route */}

      <Route
        path="/login"
        element={<Login />}
      />


      {/* Protected Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="tasks"
          element={<Tasks />}
        />

        <Route
          path="tasks/add"
          element={<AddTask />}
        />

        <Route
          path="tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="completed"
          element={<CompletedTasks />}
        />

      </Route>


      {/* Unknown URL */}

      <Route
        path="*"
        element={
          <Navigate to="/" replace />
        }
      />

    </Routes>

  );
}

export default App;
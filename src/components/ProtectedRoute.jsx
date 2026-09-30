
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       alert("Username and password are required");
//       return;
//     }

//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("username", username);

//     navigate("/");
//   };

//   return (
//     <div className="login-container">

//       <form className="login-box" onSubmit={handleLogin}>

//         <h1>Task Manager</h1>

//         <h2>Login</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">
//           Login
//         </button>

//       </form>

//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  const getPasswordStrength = () => {

    if (password.length === 0) {
      return "";
    }

    if (password.length < 6) {
      return "Weak";
    }

    if (
      password.length >= 6 &&
      password.length < 10
    ) {
      return "Medium";
    }

    return "Strong";
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    const result = login(
      username,
      password,
      rememberMe
    );

    if (!result.success) {

      setError(result.message);

      return;
    }

    navigate("/");
  };


  return (
    <div className="login-container">

      <form
        className="login-box"
        onSubmit={handleSubmit}
      >

        <h1>Task Manager</h1>

        <h2>Login</h2>


        {error && (
          <div className="error-message">
            {error}
          </div>
        )}


        {/* Username */}

        <label>
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />


        {/* Password */}

        <label>
          Password
        </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />


        {/* Password Strength */}

        {password && (
          <p className="password-strength">
            Password Strength:
            <strong>
              {" "}
              {getPasswordStrength()}
            </strong>
          </p>
        )}


        {/* Show Password */}

        <label className="checkbox-label">

          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) =>
              setShowPassword(e.target.checked)
            }
          />

          Show Password

        </label>


        {/* Remember Me */}

        <label className="checkbox-label">

          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) =>
              setRememberMe(e.target.checked)
            }
          />

          Remember Me

        </label>


        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
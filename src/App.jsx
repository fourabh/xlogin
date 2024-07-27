import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.Username == "user" && user.Password == "password") {
      setMessage("Welcome, user!");
    }else{
      setMessage("Invalid username or password")
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          required
          value={user.Username}
          name="Username"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          value={user.Password}
          name="Password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

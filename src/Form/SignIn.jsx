import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignIn data:", formData);

    // Send login request to backend

    axios
      .post("http://localhost:4001/login", formData)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.data.user); // You can store this user in the state or context for later use
      })
      .catch((error) => {
        setMessage(error.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>{message}</p>
      <p>
        <span>Dont</span>have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;

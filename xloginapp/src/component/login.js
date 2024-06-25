import React, { useState } from "react";

const Login = () => {
  const [userdetails, setUserdetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("dont'show");
  const handlechange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserdetails({ ...userdetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userdetails.username.toLowerCase() === "user" &&
      userdetails.password.toLowerCase() === "password"
    ) {
      setError("show");
    } else {
      setError("showerror");
    }
  };
  console.log(userdetails);
  return (
    <div>
      <h1>Login Page</h1>
      {error === "show" ? (
        <p>Welcome , user!</p>
      ) : error === "showerror" ? (
        <div>
          <p>Invalid username and password</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={userdetails.username || ""}
                  onChange={(e) => handlechange(e)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={userdetails.password || ""}
                  onChange={(e) => handlechange(e)}
                  required
                />
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Username:</label>

            <input
              type="text"
              name="username"
              value={userdetails.username}
              onChange={(e) => handlechange(e)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={userdetails.password}
              onChange={(e) => handlechange(e)}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      )}
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userdetails.username || ""}
              onChange={(e) => handlechange(e)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userdetails.password || ""}
              onChange={(e) => handlechange(e)}
              required
            />
          </label>
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default Login;

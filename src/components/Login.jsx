import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    show: true,
  });
  // console.log(state)
  function handleChange(e) {
    let userr = { ...user, [e.target.name]: e.target.value };
    setUser(userr);
  }
  console.log(user);

  let whattoshow;
  if (user.show) {
    whattoshow = (
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter user name"
          />
          <Form.Text className="text-muted">
            We'll never share your user name with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password2"
            type="password"
            placeholder="Confirm password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  } else {
    whattoshow = (
      <div>
        {user.email}
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }

  function handleLogIn(e) {
    e.preventDefault();
    if (user.password === user.password2) {
      let userr = { ...user, show: false };
      setUser(userr);
    }
  }

  function logout() {
    let userr = { email: "", password: "", password2: "", show: true };
    setUser(userr);
  }
  return <div>{whattoshow}</div>;
};

export default Login;

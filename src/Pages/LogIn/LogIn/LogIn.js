import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const [error, setError] = useState("");
  const { logIn, providerLogin, githubProviderLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin()
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
    });
  };

  const handleGithubSignIn = () =>{
    githubProviderLogin()
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
    });
  }

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-secondary">Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-secondary">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <p>
          <span className="text-danger">New to courseGuru</span>{" "}
          <Link to="/register">
            <small>Create a New Account</small>
          </Link>
        </p>
      </div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-success mb-3"
        >
         <FaGoogle></FaGoogle> Log In with Google
        </button>
        <br />
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline btn-dark"
        >
         <FaGithub></FaGithub> Log In with Github
        </button>
      </div>
    </div>
  );
};

export default LogIn;

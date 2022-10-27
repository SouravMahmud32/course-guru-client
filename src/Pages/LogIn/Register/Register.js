import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, providerLogin, githubProviderLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
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
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="photo url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <p>
          Already Have an Account <Link to="/login">Login</Link>
        </p>
      </div>
      <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success"
            >
              Sign In with Google
            </button>
      <button
              onClick={handleGithubSignIn}
              className="btn btn-outline btn-success"
            >
              Sign In with Github
            </button>
    </div>
  );
};

export default Register;

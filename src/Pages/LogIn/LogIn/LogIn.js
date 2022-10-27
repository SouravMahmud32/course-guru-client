import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";


const LogIn = () => {

    const [error, setError] = useState('');
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button><Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
  );
};

export default LogIn;

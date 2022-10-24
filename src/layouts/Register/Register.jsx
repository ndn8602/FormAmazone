import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Form className="d-flex justify-content-center flex-column border">
        <div className="formTitle">
          <h3>Create account</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="First and last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email or mobile phone number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="At least 6 characters" />
          <Form.Text>Passwords must be at least 6 characters</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit">Continue</Button>
        <Form.Text className="text-muted">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </Form.Text>

        <div className="formOption">
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
          <p>
            Buying for work ? <Link>Create a free business account</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Register;

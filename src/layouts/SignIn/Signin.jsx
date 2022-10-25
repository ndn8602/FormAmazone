import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Form className="d-flex justify-content-center flex-column border">
        <div className="formTitle">
          <h3>Sign in</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email or mobile phone number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Form.Text className="text-muted">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </Form.Text>
        <Dropdown>
          <Dropdown.Toggle
            variant="none"
            className="dropdown-basic p-0"
            id="dropdown-basic"
          >
            Need help?
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Forgot your password?
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Other issues with Sign-In
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <div className="divider">
        <h5>New to Amazon?</h5>
      </div>
      <Link to="/Register">
        <Button variant="register">Create your Amazon account</Button>
      </Link>
    </>
  );
};

export default Signin;

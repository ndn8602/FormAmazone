import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="dividerline"></div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/link"> Conditions of Use</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1"> Privacy Notice</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">Help</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="textCopyrigter">
        &copy; 1996-2022, Amazon.com, Inc. or its affiliates
      </p>
    </footer>
  );
};

export default Footer;

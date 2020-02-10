import React from "react";
import { Container, Row, Col } from "bootstrap-4-react";
function Header() {
  var headerStyle = {
    backgroundColor: 'palegreen',
    paddingTop: '50px',
    color: 'grey',
    display: 'block'
  }
  return (
    <div style={headerStyle}>
      <Container>
    <Row className="showGrid">
      <Col sm={4}>
        <h1>Twitter</h1>
        <h1>Search</h1>
      </Col>
      <Col sm={4}>
        <h1>Home</h1>

      </Col>
      <Col sm={4}>
        <h1>Notifications</h1>
        <h1>Messages</h1>
      </Col>
    </Row>
  </Container>
    </div>
  );
}

export default Header;

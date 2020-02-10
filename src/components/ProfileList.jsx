import React from "react";
import LiveFeed from "./LiveFeed";
import Friends from "./Friends";
import About from "./About";
import { Container, Row, Col } from "bootstrap-4-react";

function ProfileList(){
  var profileStyle = {
    backgroundColor: 'gray',
    paddingTop: '10px',
    color: 'white',
    display: 'block'
  }
  return(
    <div style={profileStyle}>
      <Container>
        <Row className="showGrid">
          <Col sm={4}>
            <About/>
          </Col>
          <Col sm={4}>
            <LiveFeed/>
          </Col>
          <Col sm={4}>
            <Friends/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileList;

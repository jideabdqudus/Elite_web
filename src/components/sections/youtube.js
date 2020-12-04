import React from "react"
import ReactPlayer from "react-player"
import { Row, Col, Container } from "reactstrap"
import "./sections.css"

const youtube = () => {
  return (
    <Container style={{marginTop:"0px"}}>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-PkN15TtFnc"
            className="player"
            width="500px"
            height="300px"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default youtube

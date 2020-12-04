import React from "react"
import { Row, Col, Container } from "reactstrap"
import GetStarted from "./getstarted"
import styled from "styled-components"

const News = ({api}) => {
  return (
    <Container>
      <SectionTitle>Latest News</SectionTitle>
      <p
        style={{
          color: "#606771",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "Normal",
          paddingLeft: "30px",
          paddingRight: "30px",
          marginBottom: "50px",
        }}
      >
        {" "}
        The latest Business news across the globe.{" "}
      </p>
      <div>
        <Row>
          <Col xl={3}>
          
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default News

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 80px auto 10px;
  text-align: center;
`

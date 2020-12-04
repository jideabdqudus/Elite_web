import React, { useState } from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

import {
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap"
import Man from "../../images/product/image_man_2.jpg"

const GetStarted = ({ api }) => {
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
        <div>
          <div>
            {api.length === 0 ? (
              <div>Loading</div>
            ) : (
              api.map(news => {
                return (
                  <Row key={news.content}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                      <Card>
                        <a href={news.url} target="__blank">
                          <CardImg
                            top
                            width="100%"
                            src={
                              news.urlToImage ? `${news.urlToImage}` : `${Man}`
                            }
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle tag="h5" className="newsTitle">
                              {`${news.title}`.substring(0, 100)}..
                            </CardTitle>
                            <CardSubtitle
                              tag="h6"
                              className="mb-2 text-muted"
                            ></CardSubtitle>
                            {/* <CardText className="newsTitle">
                            {news.description
                              ? `${news.description}`.substring(0, 100)
                              : `${news.content}`.substring(0, 100)}
                            ...
                          </CardText> */}
                            {/* <Button>
                            <a href={news.url} target="__blank">
                              Read more
                            </a>
                          </Button> */}
                            <br />
                            <span className="source">{news.source.name}</span>
                          </CardBody>
                        </a>
                      </Card>
                    </Col>
                  </Row>
                )
              })
            )}
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  )
}

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 80px auto 10px;
  text-align: center;
`

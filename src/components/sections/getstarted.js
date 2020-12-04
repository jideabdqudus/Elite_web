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
import axios from "axios"

const news = {
  method: "get",
  url:
    "http://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=20522df2815a4ce39815abc038d54ea7",
}
const API = axios
  .request(news)
  .then(function(response) {
    return(
      console.log("working")
    )
  })
  .catch(function(error) {
    console.error("geffdifok")
  })

  console.log(API)

const GetStarted = () => {
  // const [show, setShow] = useState(false)
  // const toggle = () => setShow(!show)

  return (
    // <StyledSection>
    //   <GetStartedContainer>
    //     <GetStartedTitle>Be the first to get the deals</GetStartedTitle>
    //     <TryItButton onClick={toggle}>Get early access</TryItButton>
    //     <br />
    //     <Toast isOpen={show}>
    //       <ToastHeader toggle={toggle} icon={<Spinner size="sm" />}>
    //         Info
    //       </ToastHeader>
    //       <ToastBody>
    //         Oops, that hurts! That part of me is not working right now.
    //       </ToastBody>
    //     </Toast>
    //     <Subtitle>Perfectly made for you.</Subtitle>
    //   </GetStartedContainer>
    // </StyledSection>
    <Container>
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <div>
        {/* {API.map((apis)=>(
          <h1>
            {apis.status}
          </h1>
        ))} */}
        </div>
      </div>
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

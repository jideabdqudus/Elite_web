import React from "react"
import styled from "styled-components"

import darkExtra from "../../images/dark-extra.svg"
import totalSale from "../../images/total-sale.svg"
import darkDashboardIcon from "../../images/dark-dashboard.svg"
import smileImg from "../../images/smileImg.svg"

import { Section, Container } from "../global"
import { Row, Col } from "reactstrap"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>Why us?</SectionTitle>
      <Row>
        <Col xl={3}>
          <img
            src={darkExtra}
            alt="darkExtra"
            width={"60px"}
            style={{ display: "block", margin: "auto" }}
            height={"60px"}
          />
          <h3
            style={{
              color: "#212529",
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: ".5rem",
              textAlign: "center",
            }}
          >
            Easy to Use
          </h3>
        </Col>

        <Col xl={3}>
          <img
            src={totalSale}
            alt="pieChart"
            width={"60px"}
            style={{ display: "block", margin: "auto" }}
            height={"60px"}
          />

          <h3
            style={{
              color: "#212529",
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: ".5rem",
              textAlign: "center",
            }}
          >
            Quick Returns
          </h3>
        </Col>
        <Col xl={3}>
          <img
            src={darkDashboardIcon}
            alt="darkDashboard"
            width={"60px"}
            style={{ display: "block", margin: "auto" }}
            height={"60px"}
          />
          <h3
            style={{
              color: "#212529",
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: ".5rem",
              textAlign: "center",
            }}
          >
            Single Dashboard
          </h3>
        </Col>
        <Col xl={3}>
          <img
            src={smileImg}
            alt="smileImg"
            width={"60px"}
            style={{ display: "block", margin: "auto" }}
            height={"60px"}
          />

          <h3
            style={{
              color: "#212529",
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: ".5rem",
              textAlign: "center",
            }}
          >
            Customer Service
          </h3>
        </Col>
      </Row>
    </StyledContainer>
    <br style={{ paddingBottom: "20px", marginBottom: "20px" }} />
    <br style={{ paddingBottom: "20px", marginBottom: "20px" }} />
    {/* <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Smart money management</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Your data is always safe with us as we use the latest security
            protocols.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automation</FeatureTitle>
          <FeatureText>
            Create smart automated workflows and triggers for your money.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Aggregation</FeatureTitle>
          <FeatureText>
            Easily link up to 5 banks to your finance account.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Send money to friends and family with ease.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            High interest and rewards for hitting your goals.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer> */}
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

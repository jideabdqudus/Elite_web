import React from "react"
import styled from "styled-components"

import darkExtra from "../../images/dark-extra.svg"
import totalSale from "../../images/total-sale.svg"
import darkDashboardIcon from "../../images/dark-dashboard.svg"
import smileImg from "../../images/smileImg.svg"
import { Row, Col } from "reactstrap"
import { Section, Container } from "../global"
import Construction from "../../images/001-hook.svg"
import eCommerce from "../../images/003-shopping-cart.svg"
import autoMobile from "../../images/005-service.svg"
import Airline from "../../images/008-plane.svg"
import Payment from "../../images/012-risk.svg"
import SP500 from "../../images/009-stats.svg"
import Services from "../../images/011-management-service.svg"
const Areas = () => (
  <Section
    id="features"
    style={{ backgroundColor: "#f8f8f8", padding: "10px" }}
  >
    <Row>
      <StyledContainer>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div>
            <SectionTitle style={{ marginBottom: "10px" }}>
              <h4
                style={{
                  marginBottom: "0",
                  fontWeight: "700",
                  color: "#212529",
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Diversify your finances through Elite Investment
              </h4>
            </SectionTitle>{" "}
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
              We simplified investments just for you, With more than 6 areas of
              Investments that allows you invest bits through fractional
              investing.{" "}
            </p>
          </div>
        </Col>
        <Row>
          <Col xl={2}>
            <img
              src={Construction}
              alt="Construction"
              width={"60px"}
              style={{ display: "block", margin: "auto" }}
              height={"60px"}
            />
            <h3
              style={{
                color: "#212529",
                fontSize: "18px",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: ".5rem",
                textAlign: "center",
              }}
            >
              Construction
            </h3>
          </Col>
          <Col xl={2}>
            <img
              src={eCommerce}
              alt="eCommerce"
              width={"60px"}
              height={"60px"}
              style={{ display: "block", margin: "auto" }}
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
              eCommerce/Clouds
            </h3>
          </Col>
          <Col xl={2}>
            <img
              src={autoMobile}
              alt="autoMobile"
              width={"60px"}
              height={"60px"}
              style={{ display: "block", margin: "auto" }}
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
              Automobile
            </h3>
          </Col>
          <Col xl={2}>
            <img
              src={Airline}
              alt="Airline"
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
              Airline
            </h3>
          </Col>
          <Col xl={3}>
            <img
              src={Payment}
              alt="Payment"
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
              Payment system/finance
            </h3>
          </Col>
          <Col xl={1}>
            <img
              src={SP500}
              alt="SP500"
              width={"60px"}
              height={"60px"}
              style={{ display: "block", margin: "auto" }}
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
              S&P 500
            </h3>
          </Col>
        </Row>
      </StyledContainer>
    </Row>
    {/* <Col sm="12" md={{ size: 6, offset: 3 }}>
      <button className="btnInvest">Invest Now</button>
    </Col> */}
    <br style={{ paddingBottom: "20px", marginBottom: "20px" }} />
    <br style={{ paddingBottom: "20px", marginBottom: "20px" }} />
  </Section>
)

export default Areas

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

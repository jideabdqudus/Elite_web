import React from "react"
import { Container, Row, Col } from "reactstrap"
import Line from "../../images/product/dashed_purple_line.svg"
import Num1 from "../../images/Elite_Num1.svg"
import Num2 from "../../images/Elite_Num2.svg"
import Num3 from "../../images/Elite_Num3.svg"
import Num4 from "../../images/Elite_Num4.svg"
import Man from "../../images/product/image_man_2.jpg"

const Steps = () => {
  return (
    <Container>
      <Row>
        <Col xl={5}>
          <span
            style={{
              marginBottom: "3rem",
              fontWeight: "700",
              color: "#212529",
              fontSize: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Begin your journey to a more{" "}
            <span style={{ color: "#17a9b5" }}>rewarding</span> life in just few
            steps
          </span>
          <div style={{ marginTop: "50px" }}>
            <Row>
              <Col xl={1}>
                <img
                  src={Num1}
                  alt="Number"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
                <img
                  src={Line}
                  alt="line"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
              </Col>
              <Col xl={9}>
                <span
                  style={{
                    color: "#212529",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: ".5rem",
                  }}
                >
                  Login to your dashboard
                </span>
                <p
                  style={{
                    color: "#606771",
                    fontSize: "18px",
                    fontWeight: "Normal",
                    marginTop: ".5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Begin by signing up and login into your Elite Dashboard.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img
                  src={Num2}
                  alt="Number"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
                <img
                  src={Line}
                  alt="line"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
              </Col>
              <Col xl={9}>
                <span
                  style={{
                    color: "#212529",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: ".5rem",
                  }}
                >
                  Register
                </span>
                <p
                  style={{
                    color: "#606771",
                    fontSize: "18px",
                    fontWeight: "Normal",
                    marginTop: ".5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Click register and enter your personal details to create an
                  account
                </p>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img
                  src={Num3}
                  alt="Number"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
                <img
                  src={Line}
                  alt="line"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
              </Col>
              <Col xl={9}>
                <span
                  style={{
                    color: "#212529",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: ".5rem",
                  }}
                >
                  Fund wallet
                </span>
                <p
                  style={{
                    color: "#606771",
                    fontSize: "18px",
                    fontWeight: "Normal",
                    marginTop: ".5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Fund your wallet using a debit card from any bank or online
                  transfer.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img
                  src={Num4}
                  alt="Number"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "1rem",
                  }}
                />
              </Col>
              <Col xl={9}>
                <span
                  style={{
                    color: "#212529",
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: ".5rem",
                  }}
                >
                  Make an Investment
                </span>
                <p
                  style={{
                    color: "#606771",
                    fontSize: "18px",
                    fontWeight: "Normal",
                    marginTop: ".5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Select the investment option you’d like and enter an amount to
                  invest.
                </p>
              </Col>
            </Row>
            <button className="btnInvest">Invest Now</button>
          </div>
        </Col>
        <Col xl={4}>
          <img
            src={Man}
            width="600px"
            style={{ borderRadius: "10px", marginTop: "70px" }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Steps

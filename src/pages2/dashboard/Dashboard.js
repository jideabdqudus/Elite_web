import React from "react"
import { Row, Col, Table, Button, Badge } from "reactstrap"

import Widget from "../../components/Widget"

import s from "./Dashboard.module.scss"

import money from "../../images/total-sale.svg"
import stocks from "../../images/stocks.svg"

import i1 from "../../images/idea1.jpg"
import i2 from "../../images/idea2.jpg"
import i3 from "../../images/idea3.png"
import i4 from "../../images/idea4.jpeg"

class Dashboard extends React.Component {
  constructor() {
    super()
    this.forceUpdate = this.forceUpdate.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>Wallet Balance</p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦13,400</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <h3 style={{ fontSize: "20px", fontWeight: "normal" }}>
                    MVWallet - AbdulQudus/Olajide
                  </h3>
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      marginBottom: "15px",
                      letterSpacing: "1px",
                    }}
                  >
                    08092399019 - Providus Bank
                  </p>
                  <Row> </Row>
                  <Row className={`justify-content-between mt-3`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}>
                      <Button color="info" outline size="sm">
                        Add Funds +{" "}
                      </Button>
                    </Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      <img
                        src={money}
                        alt="money"
                        width={"60px"}
                        height={"60px"}
                        className={"mr-1"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>
                  Sponsorship Investments
                </p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦10,200</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ul>
                    <li>Advansio Cooperative</li>
                    <li>Cashcruz Salon</li>
                  </ul>
                  <br />
                  <Row className={`justify-content-between mt-4`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}>
                      <Button color="info" outline size="sm">
                        View Sponsorships{" "}
                      </Button>
                    </Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      <img
                        src={stocks}
                        alt="money"
                        width={"60px"}
                        height={"60px"}
                        className={"mr-1"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>
                  Pooled Sponsorship
                </p>
              }
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>₦0.00</h3>
                </Col>
              </Row>
              <hr />
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <h3 style={{ fontSize: "20px", fontWeight: "normal" }}>
                    4 months
                  </h3>
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      marginBottom: "15px",
                      letterSpacing: "1px",
                    }}
                  >
                    Tenor
                  </p>
                  <br />
                  <br />
                  <Row className={`justify-content-between mt-5`} noGutters>
                    <Col sm={8} className={"d-flex align-items-center"}></Col>
                    <Col
                      sm={4}
                      className={
                        "d-flex align-items-center justify-content-end"
                      }
                    >
                      {"  "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h3
              className={"mb-2"}
              style={{ color: "#666", fontSize: 20, fontWeight: "normal" }}
            >
              Investment Opportunities
            </h3>
          </Col>
          <br />
          <Col sm="12">
            <Widget
              title={
                <p style={{ fontWeight: 200, fontSize: 10 }}>
                  Top Opportunities
                </p>
              }
              customDropDown
            >
              <br />
              <Row className={"mb-5"}>
                <Col sm="12">
                  <Row>
                    <Col sm="6">
                      <Row>
                        <Col sm="3">
                          <img
                            src={i1}
                            alt="Food"
                            width={"150px"}
                            style={{ borderRadius: "5px" }}
                            height={"150px"}
                          />
                        </Col>
                        <Col sm="7">
                          <h4>Food Photography</h4>
                          <Badge href="#" color="secondary">
                            20% returns || 10months
                          </Badge>
                          <br />
                          <p style={{ fontSize: "13px" }}>from ₦20,000</p>
                          <Button
                            size="sm"
                            className={"mt-1"}
                            style={{ backgroundColor: "#098c8c" }}
                          >
                            Invest
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="6">
                      <Row>
                        <Col sm="3">
                          <img
                            src={i2}
                            alt="bakery"
                            style={{ borderRadius: "5px" }}
                            width={"150px"}
                            height={"150px"}
                          />
                        </Col>
                        <Col sm="7">
                          <h4>Bakery</h4>
                          <Badge href="#" color="secondary">
                            11% returns || 7months
                          </Badge>
                          <br />
                          <p style={{ fontSize: "13px" }}>from ₦10,000</p>
                          <Button
                            size="sm"
                            className={"mt-1"}
                            style={{ backgroundColor: "#098c8c" }}
                          >
                            Invest
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={"mt-5"}>
                <Col sm="12">
                  <Row>
                    <Col sm="6">
                      <Row>
                        <Col sm="3">
                          <img
                            src={i3}
                            alt="sanitary"
                            width={"150px"}
                            height={"150px"}
                          />
                        </Col>
                        <Col sm="7">
                          <h4>Sanitary</h4>
                          <Badge href="#" color="secondary">
                            6% returns || 2 months
                          </Badge>
                          <br />
                          <p style={{ fontSize: "13px" }}>from ₦20,000</p>
                          <Button
                            size="sm"
                            className={"mt-1"}
                            style={{ backgroundColor: "#098c8c" }}
                          >
                            Invest
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="6">
                      <Row>
                        <Col sm="3">
                          <img
                            src={i4}
                            alt="ginger"
                            width={"150px"}
                            height={"150px"}
                          />
                        </Col>
                        <Col sm="7">
                          <h4>Ginger Sale</h4>
                          <Badge href="#" color="secondary">
                            40% returns || 16months
                          </Badge>
                          <br />
                          <p style={{ fontSize: "13px" }}>from ₦20,000</p>
                          <Button
                            size="sm"
                            className={"mt-1"}
                            style={{ backgroundColor: "#098c8c" }}
                          >
                            Invest
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard

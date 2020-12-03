import React from "react"
import { Container, Row, Col } from "reactstrap"
import Line from "../../images/product/dashed_purple_line.svg"
import Num1 from "../../images/product/number_1.svg"

const Steps = () => {
  return (
    <Container>
      <Row>
        <Col xl={6}>
          <h3>Begin your journey to a more rewarding life in just few steps</h3>
          <div>
            <Row>
              <Col xl={1}>
                <img src={Num1} />
                <img src={Line} />
              </Col>
              <Col xl={9}>
                <h4>Download the App</h4>
                <h6>
                  Begin by downloading the i-invest app from the Google Play
                  Store or App Store.
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img src={Num1} />
                <img src={Line} />
              </Col>
              <Col xl={9}>
                <h4>Download the App</h4>
                <h6>
                  Begin by downloading the i-invest app from the Google Play
                  Store or App Store.
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img src={Num1} />
                <img src={Line} />
              </Col>
              <Col xl={9}>
                <h4>Download the App</h4>
                <h6>
                  Begin by downloading the i-invest app from the Google Play
                  Store or App Store.
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img src={Num1} />
                <img src={Line} />
              </Col>
              <Col xl={9}>
                <h4>Download the App</h4>
                <h6>
                  Begin by downloading the i-invest app from the Google Play
                  Store or App Store.
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xl={1}>
                <img src={Num1} />
                <img src={Line} />
              </Col>
              <Col xl={9}>
                <h4>Download the App</h4>
                <h6>
                  Begin by downloading the i-invest app from the Google Play
                  Store or App Store.
                </h6>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Steps

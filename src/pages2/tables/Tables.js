import React from "react"
import {
  Row,
  Col,
  Table,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap"

import Widget from "../../components/Widget"
import s from "./Tables.modules.scss"

class Tables extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col lg={6}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Transactions</p>}
              customDropDown
            >
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Account Name</Label>
                      <Input type="text" name="name" id="exampleEmail" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Amount</Label>
                      <Input type="text" name="amount" id="examplePassword" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">Account Number</Label>
                  <Input type="text" name="address" id="exampleAddress" />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input type="text" name="city" id="exampleCity" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input type="text" name="state" id="exampleState" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input type="text" name="zip" id="exampleZip" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button color="info">Sign in</Button>
              </Form>
            </Widget>
          </Col>
          <Col lg={6}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Recent Transactions</p>}
              customDropDown
            >
              <Row>
                <Table className={"mb-0"} borderless responsive>
                  <thead>
                    <tr>
                      <th key={1} scope="col" className={"pl-0"}>
                        Customers
                      </th>
                      <th key={2} scope="col" className={"pl-0"}>
                        Date
                      </th>
                      <th key={3} scope="col" className={"pl-0"}>
                        Amount
                      </th>
                      <th key={4} scope="col" className={"pl-0"}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    <tr key={0}>
                      <td className={"pl-0 fw-thin"}>Kate Claus</td>
                      <td className={"pl-0 fw-thin"}>10 Jan 2020</td>
                      <td className={"pl-0 fw-normal"}>₦8400</td>
                      <td className={"pl-0 text-success fw-normal"}>
                        Received
                      </td>
                    </tr>
                    <tr key={1}>
                      <td className={"pl-0 fw-thin"}>Maria Gordon</td>
                      <td className={"pl-0 fw-thin"}>08 Jan 2020</td>
                      <td className={"pl-0 fw-normal"}>₦8400</td>
                      <td className={"pl-0 text-success fw-normal"}>
                        Received
                      </td>
                    </tr>
                    <tr key={2}>
                      <td className={"pl-0 fw-thin"}>Nick Peru</td>
                      <td className={"pl-0 fw-thin"}>05 Jan 2020</td>
                      <td className={"pl-0 fw-normal"}>₦1300</td>
                      <td className={"pl-0 text-danger fw-normal"}>Sent</td>
                    </tr>
                    <tr key={3}>
                      <td className={"pl-0 fw-thin"}>Lian Robinson</td>
                      <td className={"pl-0 fw-thin"}>20 Dec 2019</td>
                      <td className={"pl-0 fw-normal"}>₦880</td>
                      <td className={"pl-0 text-danger fw-normal"}>Sent</td>
                    </tr>
                    <tr key={4}>
                      <td className={"pl-0 fw-thin"}>Sam Fisher</td>
                      <td className={"pl-0 fw-thin"}>16 Dec 2019</td>
                      <td className={"pl-0 fw-normal"}>₦9400</td>
                      <td className={"pl-0 text-danger fw-normal"}>Sent</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tables

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
import { Sparklines, SparklinesBars } from "react-sparklines"

import Widget from "../../components/Widget"
import s from "./Tables.modules.scss"

import ApexChart from "react-apexcharts"

import { chartData } from "../charts/mock"

import ReactEchartsCore from "echarts-for-react/lib/core"

import echarts from "echarts/lib/echarts"

import "echarts/lib/chart/line"
import "echarts/lib/chart/pie"
import "echarts/lib/chart/themeRiver"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/legend"

class Tables extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cd: chartData,
      initEchartsOptions: {
        renderer: "canvas",
      },

      tableStyles: [
        {
          id: 1,
          picture: require("../../images/tables/1.png"), // eslint-disable-line global-require
          description: "Palo Alto",
          info: {
            type: "JPEG",
            dimensions: "200x150",
          },
          date: new Date("September 14, 2012"),
          size: "45.6 KB",
          progress: {
            percent: 29,
            colorClass: "success",
          },
        },
        {
          id: 2,
          picture: require("../../images/tables/2.png"), // eslint-disable-line global-require
          description: "The Sky",
          info: {
            type: "PSD",
            dimensions: "2400x1455",
          },
          date: new Date("November 14, 2012"),
          size: "15.3 MB",
          progress: {
            percent: 33,
            colorClass: "warning",
          },
        },
        {
          id: 3,
          picture: require("../../images/tables/3.png"), // eslint-disable-line global-require
          description: "Down the road",
          label: {
            colorClass: "info",
            text: "INFO!",
          },
          info: {
            type: "JPEG",
            dimensions: "200x150",
          },
          date: new Date("September 14, 2012"),
          size: "49.0 KB",
          progress: {
            percent: 38,
            colorClass: "primary",
          },
        },
        {
          id: 4,
          picture: require("../../images/tables/4.png"), // eslint-disable-line global-require
          description: "The Edge",
          info: {
            type: "PNG",
            dimensions: "210x160",
          },
          date: new Date("September 15, 2012"),
          size: "69.1 KB",
          progress: {
            percent: 17,
            colorClass: "danger",
          },
        },
        {
          id: 5,
          picture: require("../../images/tables/5.png"), // eslint-disable-line global-require
          description: "Fortress",
          info: {
            type: "JPEG",
            dimensions: "1452x1320",
          },
          date: new Date("October 1, 2012"),
          size: "2.3 MB",
          progress: {
            percent: 41,
            colorClass: "info",
          },
        },
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    }

    this.checkAll = this.checkAll.bind(this)
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(" ")

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`
  }

  checkAll(ev, checkbox) {
    const checkboxArr = new Array(this.state[checkbox].length).fill(
      ev.target.checked
    )
    this.setState({
      [checkbox]: checkboxArr,
    })
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    })
  }

  render() {
    const { cd, initEchartsOptions } = this.state
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
            <Col lg={12} xs={12}>
              <Widget
                title={<p style={{ fontWeight: 700 }}>Top Investors</p>}
                customDropDown
              >
                <ApexChart
                  className="sparkline-chart"
                  height={350}
                  series={cd.apex.column.series}
                  options={cd.apex.column.options}
                  type={"bar"}
                />
              </Widget>
            </Col>
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
            <Col lg={12} xs={12}>
              <Widget
                title={<p style={{ fontWeight: 400 }}>Expense Chart</p>}
                customDropDown
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.donut}
                  opts={initEchartsOptions}
                  style={{ height: "190px" }}
                />
              </Widget>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tables

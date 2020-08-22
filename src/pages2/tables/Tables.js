import React, { useState } from "react"
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
import { Doughnut } from "react-chartjs-2"
import Bars from "./Bars"

import { useDispatch, useSelector } from "react-redux"

import { addTransaction } from "../../actions/transactionAction"

const Tables = () => {
  const transactions = useSelector(state => state.transactionReducer)
  const [transaction, setTransaction] = useState({
    id: Date.now(),
    name: "",
    amount: "",
    number: "",
    date: "2020-08-23",
    status: "Sent",
    color: "success",
  })

  const dispatch = useDispatch(addTransaction(transaction))

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addTransaction(transaction))
  }

  const onChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value })
  }

  const data = {
    labels: ["Investments", "Withdrawn", "Expected"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  }

  return (
    <div className={s.root}>
      <Row>
        <Col lg={6}>
          <Widget
            title={<p style={{ fontWeight: 700 }}>Transactions</p>}
            customDropDown
          >
            <Form onSubmit={onSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Account Name</Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={onChange}
                      id="exampleEmail"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Amount</Label>
                    <Input
                      type="text"
                      name="amount"
                      onChange={onChange}
                      id="examplePassword"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Account Number</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={onChange}
                  id="exampleAddress"
                  required
                />
              </FormGroup>
              <Button type="submit" color="info">
                Send
              </Button>
            </Form>
          </Widget>
          <Col lg={12} xs={12}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Top Investors</p>}
              customDropDown
            >
              <Bars />
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
                {transactions.transactions.map(transact => (
                  <tbody key={transact.id}>
                    <tr key={0}>
                      <td className={"pl-0 fw-thin"}>{transact.name}</td>
                      <td className={"pl-0 fw-thin"}>{transact.date}</td>
                      <td className={"pl-0 fw-normal"}>₦{transact.amount}</td>
                      <td className={`pl-0 text-${transact.color} fw-normal`}>
                        {transact.status}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Row>
          </Widget>
          <Col lg={12} xs={12}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Expense Chart</p>}
              customDropDown
            >
              <Doughnut data={data} />
            </Widget>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Tables

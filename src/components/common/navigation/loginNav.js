import React, { Component } from "react"

import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap"
import { Link } from "gatsby"

export default class LoginNavigation extends Component {
  render() {
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <Link to="/" style={{color:"black", textDecoration:"none"}}>Moneyvest</Link>
        </Navbar>
      </Container>
    )
  }
}

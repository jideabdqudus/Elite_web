import React, { Component } from "react"

import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap"

export default class LoginNavigation extends Component {
  render() {
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Moneyvest</NavbarBrand>
        </Navbar>
      </Container>
    )
  }
}

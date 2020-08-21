import React from "react"
import PropTypes from "prop-types"
import {
  Navbar,
  NavItem,
  NavLink,
} from "reactstrap"
import cx from "classnames"
import arrowUnactive from "../../images/Arrow 6.svg"
import arrowActive from "../../images/Arrow 5.svg"

import s from "./Header.module.scss" 

class Header extends React.Component {
  
  render() {
    return (
      <Navbar
        className={`${s.root} d-print-none`}
        style={{  backgroundColor: "#323232" }}
      >
      </Navbar>
    )
  }
}

export default Header

import React from "react"
import {
  Navbar,
} from "reactstrap"
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

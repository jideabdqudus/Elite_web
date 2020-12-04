import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"
import { Link } from "gatsby"
import Elite from "../../../images/Elite(black).png"
import "./navigation.css"

const NAV_ITEMS = ["", "", "", ""]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem} style={{ fontWeight: "700" }}>
            {this.getNavAnchorLink(navItem)}
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                <img src={Elite} alt="Logo" height="60px" />
              </AnchorLink>
            </Scrollspy>
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <div>
                  <Menu size={24} alt="open menu" />
                </div>
              )}
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
            <button className="btnLogin">
              {" "}
              <Link to="/sign" className="login">
                Log in
              </Link>
            </button>
            <button className="btnSign">
              {" "}
              <Link to="/sign" className="sign">
                Sign up
              </Link>
            </button>
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container
                style={{ backgroundColor: "white", paddingBottom: "50px" }}
              >
                {this.getNavList({ mobile: true })}
                <button className="btnLogin">
                  {" "}
                  <Link to="/sign" className="login">
                    Log in
                  </Link>
                </button>
                <button className="btnSign">
                  {" "}
                  <Link to="/sign" className="sign">
                    Sign up
                  </Link>
                </button>
              </Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

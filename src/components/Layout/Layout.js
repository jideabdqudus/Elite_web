import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Hammer from "rc-hammerjs"

import Dashboard from "../../pages/dashboard"
import Header from "../Header"
import Sidebar from "../Sidebar"
import {
  openSidebar,
  closeSidebar,
  toggleSidebar,
} from "../../actions/navigation"
import s from "./Layout.module.scss"
import BreadcrumbHistory from "../BreadcrumbHistory"

// pages
import Typography from "../../pages2/typography"
import Maps from "../../pages2/maps"
import Notifications from "../../pages2/notifications/Notifications"
import Icons from "../../pages2/icons"
import Tables from "../../pages2/tables"
import Charts from "../../pages2/charts"

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
  }

  constructor(props) {
    super(props)

    this.handleSwipe = this.handleSwipe.bind(this)
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this)
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
  }

  handleResize() {
    if (window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar())
    } else if (window.innerWidth >= 768) {
      this.props.dispatch(openSidebar())
    }
  }

  handleCloseSidebar(e) {
    if (
      e.target.closest("#sidebar-drawer") == null &&
      this.props.sidebarOpened &&
      window.innerWidth <= 768
    ) {
      this.props.dispatch(toggleSidebar())
    }
  }

  handleSwipe(e) {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar())
        return
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar())
        return
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          !this.props.sidebarOpened ? s.sidebarClose : "",
          "flatlogic-one",
          "dashboard-light",
        ].join(" ")}
        onClick={e => this.handleCloseSidebar(e)}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  }
}

export default connect(mapStateToProps)(Layout)

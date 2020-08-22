import React from "react"
import PropTypes from "prop-types"
import { dismissAlert } from "../../actions/alerts"
import s from "./Sidebar.module.scss"
import { logoutUser } from "../../actions/user"

import lightDashboardIcon from "../../images/light-dashboard.svg"
import totalSale from "../../images/total-sale.svg"
import logoutIcon from "../../images/logout.svg"
import accountIcon from "../../images/account.svg"
import smileImg from "../../images/smileImg.svg"
import { Button } from "reactstrap"
import notify from "../../images/notify.svg"
import stocks from "../../images/stocks.svg"

import { Link } from "gatsby"

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    activeItem: "",
  }

  constructor(props) {
    super(props)

    this.doLogout = this.doLogout.bind(this)
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id))
  }

  doLogout() {
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
      <div
        className={`${
          !this.props.sidebarOpened && !this.props.sidebarStatic
            ? s.sidebarClose
            : ""
        } ${s.sidebarWrapper}`}
        id={"sidebar-drawer"}
      >
        <nav className={s.root}>
          <header className={s.logo}>
            <span>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Moneyvest&nbsp;
              </Link>
            </span>
          </header>
          <img
            src={accountIcon}
            alt="lightDashboard"
            width={"60px"}
            height={"60px"}
            style={{ margin: "35px 0 0px 32px" }}
          />
          <h4 style={{ margin: "35px 0 0px 32px" }}>
            Hello <b>Abdul-Qudus</b>
          </h4>
          <p style={{ margin: "5px 0 0px 32px" }}>jideabdqudus@gmail.com</p>
          <Button
            style={{ margin: "5px 0 0px 32px", backgroundColor: "#098c8c" }}
            size="sm"
          >
            Edit profile{" "}
          </Button>
          <br />
          <br />
          <ul className={s.nav}>
            <div className={"ml-4"}>
              <Link
                to="/app/dashboard"
                className={"mt-1 mb-1 ml-1"}
                style={{ color: "#666", textDecoration: "none" }}
              >
                <img
                  src={lightDashboardIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
                <span className={"ml-4 "}>
                  <b>Dashboard</b>
                </span>
              </Link>
            </div>
            <br />
            <div className={"ml-4"}>
              <Link
                to="/app/transactions"
                className={"mt-1 mb-1 ml-1"}
                style={{ color: "#666", textDecoration: "none" }}
              >
                <img
                  src={totalSale}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />

                <span className={"ml-4 "}>
                  <b>Transactions</b>
                </span>
              </Link>
            </div>
            <br />
            <div className={"ml-4"}>
              <img
                src={notify}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />

              <span
                className={"ml-4 text-muted"}
                style={{ fontWeight: "bold" }}
              >
                Notifications
              </span>
            </div>
            <br />
            <div className={"ml-4"}>
              <img
                src={stocks}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />

              <span
                className={"ml-4 text-muted"}
                style={{ fontWeight: "bold" }}
              >
                Stocks
              </span>
            </div>
          </ul>
          <ul className={s.downNav}>
            <hr />
            <div className={"ml-4"}>
              <img
                src={smileImg}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />

              <span
                className={"ml-4 text-muted"}
                style={{ fontWeight: "bold" }}
              >
                Help & Support
              </span>
            </div>
            <br />
            <div className={"ml-4"}>
              <Link
                to="/sign"
                className={"mt-1 mb-1 ml-1"}
                style={{ color: "#666", textDecoration: "none" }}
              >
                <img
                  src={logoutIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
                <span className={"ml-4 "}>
                  <b>Log Out</b>
                </span>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}

// function mapStateToProps(store) {
//   return {
//     sidebarOpened: store.navigation.sidebarOpened,
//     sidebarStatic: store.navigation.sidebarStatic,
//     alertsList: store.alerts.alertsList,
//     activeItem: store.navigation.activeItem,
//     navbarType: store.navigation.navbarType,
//   };
// }

export default Sidebar

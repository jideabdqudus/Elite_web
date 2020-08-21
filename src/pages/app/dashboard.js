import React, { Fragment } from "react"
import Sidebar from "../../components/Sidebar"
import s from "../../components/Layout/Layout.module.scss"
import Header from "../../components/Header"
import Hammer from "rc-hammerjs"
import Dashboard from "../../pages2/dashboard/Dashboard"
import { TransitionGroup, CSSTransition } from "react-transition-group"



const Dash = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className={s.wrap}>
        <Header />
        <Hammer>
          <main className={s.content}>
            <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={200}
              >
                <Dashboard />
              </CSSTransition>
            </TransitionGroup>
          </main>
        </Hammer>
      </div>
    </Fragment>
  )
}

export default Dash



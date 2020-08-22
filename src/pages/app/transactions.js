import React, { Fragment } from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import s from "../../components/Layout/Layout.module.scss"
import Header from "../../components/Header/Header"
import Hammer from "rc-hammerjs"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Tables from "../../pages2/tables/Tables"



const Transact = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className={s.wrap}>
        <Header />
        <Hammer>
          <main className={s.content}>
            <h1 style={{ marginBottom: "20px" }}>Transactions</h1>
            <TransitionGroup>
              <CSSTransition classNames="fade" timeout={200}>
                <Tables />
              </CSSTransition>
            </TransitionGroup>
          </main>
        </Hammer>
      </div>
    </Fragment>
  )
}

export default Transact




import React, { Fragment, useState } from "react"
import styles from "./sign.module.css"
import { Container, Row, Col, FormGroup } from "reactstrap"
import cx from "classnames"
import { Link } from "gatsby"

import {
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
  Navbar,
  NavbarBrand,
} from "reactstrap"

const Sign = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  return (
    <Fragment>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">Moneyvest</Link>
          </NavbarBrand>
        </Navbar>
      </Container>
      <div style={{ backgroundColor: "#098c8c" }}>
        <div className={styles.pageContentBge5}>
          <Container>
            <div className={styles.container}>
              <div className={styles.loginWrap}>
                <div
                  className={styles.loginContent}
                  style={{ borderRadius: "10px" }}
                >
                  <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                      <h4>Sign in into Moneyvest</h4>
                    </Col>
                  </Row>
                  <br />
                  <div className={styles.loginForm}>
                    <form>
                      <FormGroup>
                        <label htmlFor="user">Username</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="user"
                          type="text"
                          name="user"
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="password">Password</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="password"
                          type="password"
                          name="password"
                        />
                      </FormGroup>
                      <Link to="/dashboard" style={{ display: "block" }}>
                        <button
                          style={{ marginBottom: "20px" }}
                          className={cx(
                            styles.auBtn,
                            styles.auBtnBlock,
                            styles.auBtnGreen
                          )}
                          type="submit"
                        >
                          sign in
                        </button>
                      </Link>
                      <div className={styles.socialLoginContent}>
                        <div className={styles.socialButton}>
                          <button
                            className={cx(
                              styles.auBtn,
                              styles.auBtnBlock,
                              styles.auBtnBlue
                            )}
                            onClick={toggle}
                          >
                            sign in with facebook
                          </button>
                          <br />
                          <button
                            className={cx(
                              styles.auBtn,
                              styles.auBtnBlock,
                              styles.auBtnBlue2
                            )}
                            onClick={toggle}
                          >
                            sign in with twitter
                          </button>
                        </div>
                        <br />
                        <Toast isOpen={show}>
                          <ToastHeader
                            toggle={toggle}
                            icon={<Spinner size="sm" />}
                          >
                            Info
                          </ToastHeader>
                          <ToastBody>
                            Oops, that hurts! That part of me is not working
                            right now.
                          </ToastBody>
                        </Toast>
                      </div>
                    </form>
                    <div className={styles.registerLink}>
                      <p>
                        Username & Password:
                        <span style={{ color: "red" }}> {"  "}guest</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}

export default Sign

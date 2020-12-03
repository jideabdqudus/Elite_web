import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Youtube from "../components/sections/youtube"
import Steps from "../components/sections/steps"
import "../components/sections/sections.css"
import Areas from "../components/sections/areas"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Youtube />
    <div className="stepBackground">
      <Areas/>
    </div>
    <div className="stepBackground">
      <Steps />
    </div>
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage

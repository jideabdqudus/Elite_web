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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    {/* <Youtube/> */}
    <Steps/>
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage

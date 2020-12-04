import React, { useEffect, useState } from "react"

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
import axios from "axios"

const IndexPage = () => {
  const [api, setApi] = useState("")

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "http://newsapi.org/v2/top-headlines?country=ng&category=business&pageSize=4&apiKey=20522df2815a4ce39815abc038d54ea7"
        )
        .then(response => setApi(response.data.articles))
        .catch(function(error) {
          console.error("geffdifok")
        })
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const news = {
  //       method: "get",
  //       url:
  //         "http://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=20522df2815a4ce39815abc038d54ea7",
  //     }
  //     const fin = await axios
  //       .request(news)
  //       .then(function(response) {
  //         console.log("working")
  //       })
  //       .catch(function(error) {
  //         console.error("geffdifok")
  //       })
  //   }
  //   fetchData()
  // }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <Header />
      <Youtube />
      <div className="stepBackground">
        <Areas />
      </div>
      <Features />
      <div className="stepBackground">
        <Steps />
      </div>
      <GetStarted api={api} />
      <Footer />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Header from "../components/Header/header"
import Banner from "../components/Banner/banner"
import GetStarted from "../components/GetStarted/getstarted"
import NewLaunches from "../components/NewLaunches/newlaunches"
import Container from "../components/container"
import HowItWorks from "../components/HowItWorks/howitworks"
import Helmet from "react-helmet"


export default function Home() {
  return (
    <Container>
      <Helmet>
          <meta charSet="utf-8" />
          <title>BeBodywise</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      <Header/>
      <Banner />
      <GetStarted/>
      <NewLaunches />
      <GetStarted/>
      <HowItWorks />
    </Container>
  )
}

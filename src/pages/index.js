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
        <title>BeBodywise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&family=Roboto+Slab:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
        ></link>
      </Helmet>
      <Header />
      <Banner />
      <main className="">
        <GetStarted />
        <NewLaunches />
        <GetStarted />
        <HowItWorks />
      </main>
    </Container>
  )
}

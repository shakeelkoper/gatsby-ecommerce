import React from "react"
import Header from "../components/Header/header"
import Banner from "../components/Banner/banner"
import GetStarted from "../components/GetStarted/getstarted"
import NewLaunches from "../components/NewLaunches/newlaunches"
import Container from "../components/container"
import HowItWorks from "../components/HowItWorks/howitworks"


export default function Home() {
  return (
    <Container>
      <Header/>
      <Banner />
      <GetStarted/>
      <NewLaunches />
      <GetStarted/>
      <HowItWorks />
    </Container>
  )
}

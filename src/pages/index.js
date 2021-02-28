import React from "react"
import Header from "../components/Header/header"
import Banner from "../components/Banner/banner"
import Container from "../components/container"
import GetStarted from "../components/GetStarted/getstarted"

export default function Home() {
  return (
    <Container>
      <Header/>
      <Banner />
      <GetStarted/>
    </Container>
  )
}

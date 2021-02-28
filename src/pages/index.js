import React from "react"
import Header from "../components/Header/header"
import Banner from "../components/Banner/banner"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <Header/>
      <Banner />
    </Container>
  )
}

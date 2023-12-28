import React from "react"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import styled from "styled-components"
import TabWrapper from "./components/TabWrapper"
import Cards from "./components/Cards"
import AccordionWrapper from "./components/AccordionWrapper"

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <TabWrapper />
      <Cards />
      <AccordionWrapper />
    </PageWrapper>
  )
}

export default App

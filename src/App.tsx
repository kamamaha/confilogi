import React from "react"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import styled from "styled-components"

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
    </PageWrapper>
  )
}

export default App

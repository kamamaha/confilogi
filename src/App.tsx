import React from "react"
import Navbar from "./components/navbar/Navbar"
import styled from "styled-components"

const PageWrapper = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <PageWrapper>
      <Navbar />
    </PageWrapper>
  )
}

export default App

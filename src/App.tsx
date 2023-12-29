import React, { useEffect } from "react"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import styled from "styled-components"
import Tabs from "./components/Tabs"
import Cards from "./components/Cards"
import Accordion from "./components/Accordion"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import { useDisclosure } from "@chakra-ui/hooks"
import { handleOpenModalAfterTime } from "./utils"
import InformationModal from "./components/common/modals/InformationModal"
import SingleTab from "./components/SingleTab"
import IllustrationTab2 from "./assets/illustration-features-tab-2.svg"

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    handleOpenModalAfterTime(onOpen)
  }, [])

  return (
    <PageWrapper
      onMouseEnter={(e) => {
        if (!e) return
        e.pageY <= 100 && onOpen()
      }}
    >
      <Navbar />
      <Hero />
      <Tabs />
      <Cards />
      <Accordion />
      <Newsletter />
      <Footer />
      <InformationModal isOpen={isOpen} onClose={onClose}>
        <SingleTab
          title=" Intelligent search"
          content=" Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks."
          imageComponent={<IllustrationTab2 />}
        />
      </InformationModal>
    </PageWrapper>
  )
}

export default App

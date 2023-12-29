import React, { useState } from "react"
import IllustrationTab1 from "../../assets/illustration-features-tab-1.svg"
import IllustrationTab2 from "../../assets/illustration-features-tab-2.svg"
import IllustrationTab3 from "../../assets/illustration-features-tab-3.svg"
import {
  Text,
  Flex,
  Stack,
  Tabs as TabsComponent,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import styled from "styled-components"
import { lightBlue } from "../../theme"
import SingleTab from "./SingleTab"

const TabSelect = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    display: block;
  }
  .chakra-tabs__tab {
    color: gray;
    width: 200px;
    text-align: center;
    &[aria-selected="true"] {
      border-color: hsl(0, 94%, 66%);
      color: hsl(229, 31%, 21%);
    }
  }
`

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <TabsComponent
      data-testid="tabs"
      id="features"
      onChange={(index) => setTabIndex(index)}
      mt={150}
    >
      <Text
        as={"h3"}
        fontWeight={500}
        fontSize={{ base: "24px", md: "30px" }}
        lineHeight={{ base: "30px", md: "45px" }}
        align={"center"}
      >
        Features
      </Text>
      <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
        <Text as={"p"} fontSize="lg" align={"center"} maxW={"500px"} pt={30}>
          Our aim is to make it quick and for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>
      </Flex>
      <TabList w={"fit-content"} my={"50px"} mx={"auto"}>
        <Stack direction={{ base: "column", md: "row" }}>
          <TabSelect>
            <Tab>Simple Bookmarking</Tab>
            <Tab>Speedy Searching</Tab>
            <Tab>Easy Sharing</Tab>
          </TabSelect>
        </Stack>
      </TabList>
      <TabPanels>
        <TabPanel p={0} pt={70}>
          <SingleTab
            title="Bookmark in one click"
            content="A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instntly. Try it for free."
            imageComponent={<IllustrationTab1 />}
          />
        </TabPanel>
        <TabPanel p={0} pt={70}>
          <SingleTab
            title=" Intelligent search"
            content=" Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks."
            imageComponent={<IllustrationTab2 />}
          />
        </TabPanel>
        <TabPanel p={0} pt={70}>
          <SingleTab
            title="Share your bookmarks"
            content="Easly share your bookmarks and collections with others. Create
                  a shareable link that you can send at tke click of a button."
            imageComponent={<IllustrationTab3 />}
          />
        </TabPanel>
      </TabPanels>
    </TabsComponent>
  )
}

export default Tabs

import React, { useState } from "react"
import IllustrationTab1 from "../assets/illustration-features-tab-1.svg"
import IllustrationTab2 from "../assets/illustration-features-tab-2.svg"
import IllustrationTab3 from "../assets/illustration-features-tab-3.svg"
import {
  Text,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import styled from "styled-components"
import { lightBlue } from "../theme"
import BlueButton from "./common/buttons/BlueButton"
import { gray } from "../theme"
import { lightRed } from "../theme"

const ImageWrapper = styled.div`
  max-width: 800px;
  width: 40vw;
  height: auto;
  @media (max-width: 768px) {
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
  }
  svg {
    width: 100%;
    height: 100%;
    overflow: "visible";
  }
`

const BackgroundShape = styled.div`
  background-color: ${lightBlue};
  height: 35vh;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  margin-top: -30vh;
  z-index: -1;
  width: 40vw;
  @media (max-width: 768px) {
    width: 60vw;
    max-height: 150px;
    min-height: 150px;
    margin-top: -400px;
    height: 45vh;
  }
`
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

const TabWrapper = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Tabs onChange={(index) => setTabIndex(index)} mt={150}>
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
      <TabList
        w={"fit-content"}
        my={"50px"}
        mx={"auto"}
      
      >
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
          <Stack
            direction={{ base: "column", md: "row" }}
            maxW={"1440px"}
            mx={"auto"}
          >
            <ImageWrapper>
              <IllustrationTab1 />
            </ImageWrapper>

            <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Text
                  as={"h3"}
                  fontWeight={500}
                  fontSize={{ base: "24px", md: "30px" }}
                  lineHeight={{ base: "30px", md: "45px" }}
                  align={{ base: "center", md: "left" }}
                  mt={{ base: "50px", md: "0" }}
                >
                  Bookmark in one click
                </Text>
                <Text
                  as={"p"}
                  fontSize="lg"
                  align={{ base: "center", md: "left" }}
                >
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instntly. Try it for free.
                </Text>
                <Stack
                  direction={{ base: "row", md: "row" }}
                  spacing={4}
                  mx={{ base: "auto", md: "0" }}
                  
                >
                  <BlueButton text="More Info" />
                </Stack>
              </Stack>
            </Flex>
          </Stack>
          <Flex justify={"start"}>
            <BackgroundShape />
          </Flex>
        </TabPanel>

        <TabPanel p={0} pt={70}>
          <Stack
            direction={{ base: "column", md: "row" }}
            maxW={"1440px"}
            ml={"auto"}
            mr={"auto"}
          >
            <ImageWrapper>
              <IllustrationTab2 />
            </ImageWrapper>

            <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Text
                  as={"h3"}
                  fontWeight={500}
                  fontSize={{ base: "24px", md: "30px" }}
                  lineHeight={{ base: "30px", md: "45px" }}
                  align={{ base: "center", md: "left" }}
                  mt={{ base: "50px", md: "0" }}
                >
                  Intelligent search
                </Text>
                <Text
                  as={"p"}
                  fontSize="lg"
                  align={{ base: "center", md: "left" }}
                >
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </Text>
                <Stack
                  direction={{ base: "row", md: "row" }}
                  spacing={4}
                  ml={{ base: "auto", md: "0" }}
                  mr={{ base: "auto", md: "0" }}
                >
                  <BlueButton text="More Info" />
                </Stack>
              </Stack>
            </Flex>
          </Stack>
          <Flex justify={"start"}>
            <BackgroundShape />
          </Flex>
        </TabPanel>

        <TabPanel p={0} pt={70}>
          <Stack
            direction={{ base: "column", md: "row" }}
            maxW={"1440px"}
            ml={"auto"}
            mr={"auto"}
          >
            <ImageWrapper>
              <IllustrationTab3 />
            </ImageWrapper>

            <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Text
                  as={"h3"}
                  fontWeight={500}
                  fontSize={{ base: "24px", md: "30px" }}
                  lineHeight={{ base: "30px", md: "45px" }}
                  align={{ base: "center", md: "left" }}
                  mt={{ base: "50px", md: "0" }}
                >
                  Share your bookmarks
                </Text>
                <Text
                  as={"p"}
                  fontSize="lg"
                  align={{ base: "center", md: "left" }}
                >
                  Easly share your bookmarks and collections with others. Create
                  a shareable link that you can send at tke click of a button.
                </Text>
                <Stack
                  direction={{ base: "row", md: "row" }}
                  spacing={4}
                  ml={{ base: "auto", md: "0" }}
                  mr={{ base: "auto", md: "0" }}
                >
                  <BlueButton text="More Info" />
                </Stack>
              </Stack>
            </Flex>
          </Stack>
          <Flex justify={"start"}>
            <BackgroundShape />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabWrapper

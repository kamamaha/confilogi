import React from "react"
import Illustration from "../assets/illustration-hero.svg"
import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import BlueButton from "./common/buttons/BlueButton"
import GreyButton from "./common/buttons/GreyButton"
import styled from "styled-components"
import { lightBlue } from "../theme"

const ImageWrapper = styled.div`
    width: 40vw;
    height: auto;
 
  @media (max-width: 768px) {
      width: 90vw;
  }
  svg{
    width: 100%;
    height: 100%;
    overflow: 'visible'
  }
`
const BackgroundShape = styled.div`
    background-color: ${lightBlue};
    max-height: 500px;
    min-height: 350px;
    border-top-left-radius: 250px;
    border-bottom-left-radius: 250px;
    margin-top: -320px;
    z-index: -1;
    width: 40vw;
    @media (max-width: 768px) {
      width: 60vw;
      max-height: 150px;
      min-height: 150px;
      margin-top: -120px;
  }
`
const Hero = () =>
<Stack>
    <Stack direction={{ base: "column", md: "row" }} maxW={"1440px"} ml={"auto"} mr={"auto"}>
      <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading>
            <Text as={"span"} position={"relative"} fontWeight={500} fontSize={"50px"}>
              A Simple Bookmark <br /> Manager
            </Text>
          </Heading>
          <Text fontSize="lg">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instntly. Try it for
            free.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <BlueButton text="Get it on Chrome" />
            <GreyButton text="Get it on Firefox" />
          </Stack>
        </Stack>
      </Flex>
        <ImageWrapper>
          <Illustration />
        </ImageWrapper>
    </Stack>
      <Flex justify={"end"}>
        <BackgroundShape/>
      </Flex>
    
    </Stack>
export default Hero

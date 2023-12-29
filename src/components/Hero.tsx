import React from "react"
import Illustration from "../assets/illustration-hero.svg"
import { Hide, Flex, Stack, Text } from "@chakra-ui/react"
import BlueButton from "./common/buttons/BlueButton"
import GreyButton from "./common/buttons/GreyButton"
import styled from "styled-components"
import { lightBlue } from "../theme"

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
  height: 45vh;
  border-top-left-radius: 250px;
  border-bottom-left-radius: 250px;
  margin-top: -40vh;
  z-index: -1;
  width: 40vw;
  @media (max-width: 768px) {
    width: 60vw;
    max-height: 150px;
    min-height: 150px;
    margin-top: -120px;
    height: 45vh;
  }
`
const Hero = () => (
  <Stack data-testid="hero">
    <Stack
      direction={{ base: "column", md: "row" }}
      maxW={"1440px"}
      ml={"auto"}
      mr={"auto"}
      mt={150}
    >
      <Hide above="md">
        <ImageWrapper>
          <Illustration />
        </ImageWrapper>
      </Hide>
      <Hide above="md">
        <Flex justify={"end"}>
          <BackgroundShape />
        </Flex>
      </Hide>
      <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            as={"h1"}
            fontWeight={500}
            fontSize={{ base: "30px", md: "50px" }}
            align={{ base: "center", md: "left" }}
            lineHeight={{ base: "35px", md: "45px" }}
          >
            A Simple Bookmark <br /> Manager
          </Text>
          <Text as={"p"} fontSize="lg" align={{ base: "center", md: "left" }}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instntly. Try it for
            free.
          </Text>
          <Stack
            direction={{ base: "row", md: "row" }}
            spacing={4}
            ml={{ base: "auto", md: "0" }}
            mr={{ base: "auto", md: "0" }}
          >
            <BlueButton text="Get it on Chrome" />
            <GreyButton text="Get it on Firefox" />
          </Stack>
        </Stack>
      </Flex>
      <Hide below="md">
        <ImageWrapper>
          <Illustration />
        </ImageWrapper>
      </Hide>
    </Stack>
    <Hide below="md">
      <Flex justify={"end"}>
        <BackgroundShape />
      </Flex>
    </Hide>
  </Stack>
)
export default Hero

import React from "react"
import { Text, Flex, Stack, Box } from "@chakra-ui/react"
import ChromeImage from "../../assets/logo-chrome.svg"
import FirefoxImage from "../../assets/logo-firefox.svg"
import Operaimage from "../../assets/logo-opera.svg"
import Card from "./Card"

const Cards = () => (
  <>
    <Text
      id="pricing"
      mt={"150px"}
      as={"h3"}
      fontWeight={500}
      fontSize={{ base: "24px", md: "30px" }}
      lineHeight={{ base: "30px", md: "45px" }}
      align={"center"}
    >
      Download the extension
    </Text>
    <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
      <Text as={"p"} fontSize="lg" align={"center"} maxW={"500px"} pt={30}>
        We.ve got more browsers in the pipeline. Please do let us know if you.ve
        got a favourite you'd like us to proritize.
      </Text>
    </Flex>
    <Stack
      data-testid="cards"
      direction={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      flexFlow={"wrap"}
      mt={50}
    >
      <Card
        text="Add to Chrome"
        content="Minimium version 62"
        imageComponent={<ChromeImage />}
      />
      <Card
        text="Add to Firefox"
        content="Minimium version 55"
        imageComponent={<FirefoxImage />}
        marginTop={10}
      />
      <Card
        text="Add to Opera"
        content="Minimium version 46"
        imageComponent={<Operaimage />}
        marginTop={{ base: "2.5rem", lg: "5rem" }}
      />
    </Stack>
  </>
)

export default Cards

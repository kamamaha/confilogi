import React from "react"
import { Text, Flex, Stack, Box } from "@chakra-ui/react"
import ChromeImage from "../assets/logo-chrome.svg"
import FirefoxImage from "../assets/logo-firefox.svg"
import OperaImage from "../assets/logo-opera.svg"
import DotDivider from "../assets/bg-dots.svg"
import BlueButton from "./common/buttons/BlueButton"

const Cards = () => {
  return (
    <>
      <Text
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
          We.ve got more browsers in the pipeline. Please do let us know if
          you.ve got a favourite you'd like us to proritize.
        </Text>
      </Flex>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        flexFlow={"wrap"}
        mt={50}
      >
        <Box
          role={"group"}
          py={6}
          maxW={"280px"}
          w={"full"}
          boxShadow={"0px 8px 11px -4px rgba(210, 213, 237, 1)"}
          rounded={"lg"}
          pos={"relative"}
          h={"fit-content"}
          zIndex={1}
          ml={5}
          mr={5}
        >
          <Stack align={"center"}>
            <ChromeImage />
          </Stack>
          <Stack pt={10} align={"center"}>
            <Text as={"h4"} fontSize={"2xl"} fontWeight={500}>
              Add to Chrome
            </Text>
            <Text as={"p"} color={"gray.500"} fontSize={"sm"}>
              Minimium version 62
            </Text>
          </Stack>
          <Stack align={"center"} mt={10}>
            <DotDivider />
          </Stack>
          <Stack align={"center"} mt={5}>
            <BlueButton text="Add & Install Extension" />
          </Stack>
        </Box>
        <Box
          role={"group"}
          h={"fit-content"}
          py={6}
          maxW={"280px"}
          w={"full"}
          boxShadow={"0px 8px 11px -4px rgba(210, 213, 237, 1)"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          ml={5}
          mr={5}
          mt={10}
        >
          <Stack align={"center"}>
            <FirefoxImage />
          </Stack>
          <Stack pt={10} align={"center"}>
            <Text as={"h4"} fontSize={"2xl"} fontWeight={500}>
              Add to Firefox
            </Text>
            <Text as={"p"} color={"gray.500"} fontSize={"sm"}>
              Minimium version 55
            </Text>
          </Stack>
          <Stack align={"center"} mt={10}>
            <DotDivider />
          </Stack>
          <Stack align={"center"} mt={5}>
            <BlueButton text="Add & Install Extension" />
          </Stack>
        </Box>

        <Box
          role={"group"}
          py={6}
          maxW={"280px"}
          w={"full"}
          boxShadow={"0px 8px 11px -4px rgba(210, 213, 237, 1)"}
          rounded={"lg"}
          pos={"relative"}
          h={"fit-content"}
          zIndex={1}
          ml={5}
          mr={5}
          mt={{ base: "2.5rem", lg: "5rem" }}
        >
          <Stack align={"center"}>
            <OperaImage />
          </Stack>
          <Stack pt={10} align={"center"}>
            <Text as={"h4"} fontSize={"2xl"} fontWeight={500}>
              Add to Opera
            </Text>
            <Text as={"p"} color={"gray.500"} fontSize={"sm"}>
              Minimium version 46
            </Text>
          </Stack>
          <Stack align={"center"} mt={10}>
            <DotDivider />
          </Stack>
          <Stack align={"center"} mt={5}>
            <BlueButton text="Add & Install Extension" />
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default Cards

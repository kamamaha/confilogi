import React from "react"
import {
  Text,
  Flex,
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Stack
} from "@chakra-ui/react"
import styled from "styled-components"
import BlueButton from "./common/buttons/BlueButton"

const AccordionContainer = styled.div`
  .chakra-accordion__button{
    padding: 0;
    .chakra-icon{
        color: hsl(231, 69%, 60%);
      }
    &[aria-expanded="true"]{
      .chakra-icon{
        color: hsl(0, 94%, 66%);
      }  
    }
    
    &:hover{
      background: inherit;
      
    }
    span{
      padding: 20px 0 20px 0;
      &:hover{
      color: hsl(0, 94%, 66%);
    }
    }
    
  }
`


const Accordion = () => {
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
        Frequently Asked Questions
      </Text>
      <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
        <Text as={"p"} fontSize="lg" align={"center"} maxW={"500px"} pt={30}>
          Here are some od our FAQs. If you have any other questions you'd like
          answered please fell free to mail us.
        </Text>
      </Flex>
    <Stack maxW={"650px"}
            mx={"auto"}
            mt={50} px={"20px"}>
      <AccordionContainer>

             
      <AccordionComponent allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box  as="span" flex="1" textAlign="left" fontWeight={500} >
                What is Bookmark?
              </Box>
              <AccordionIcon fontSize={"40px"}/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={0} color={"hsl(229, 8%, 60%)"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={500}>
                How can I request a new browser?
              </Box>
              <AccordionIcon fontSize={"40px"}/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={0} color={"hsl(229, 8%, 60%)"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={500}>
                Is there a mobile app?
              </Box>
              <AccordionIcon fontSize={"40px"}/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={0} color={"hsl(229, 8%, 60%)"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={500}>
                What about other Chromium browsers?
              </Box>
              <AccordionIcon fontSize={"40px"}/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={0} color={"hsl(229, 8%, 60%)"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>


      </AccordionComponent>
      </AccordionContainer>
      <Stack
                  direction={{ base: "row", md: "row" }}
                  spacing={4}
                  mx={"auto"} mt={50}
                >
                  <BlueButton text="More Info" />
                </Stack>
      </Stack>
    </>
  )
}

export default Accordion

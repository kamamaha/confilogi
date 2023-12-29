import React from "react"

import {
  Box,
  Container,
  Stack,
} from "@chakra-ui/react"
import Link from "../components/common/buttons/Link"
import LogoWhite from "./common/icons/LogoWhite"
import styled from "styled-components"
import FacebookIcons from "./common/icons/FacebookIcon"
import TwitterIcon from "./common/icons/TwitterIcon"

const SocialWrapper = styled.div`
display: flex;
  svg{
    margin: 0 20px;
    path{
      &:hover{
        fill:hsl(0, 94%, 66%);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
`

const Footer = () => (
  <Box
    bg={"hsl(229, 31%, 21%)"}
    data-testid="footer"
  >
    <Container
      as={Stack}
      maxW={"10xl"}
      py={5}
      px={8}
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction={{ base: "column", md: "row" }} alignItems={"center"}>
        <LogoWhite />
          <Link text="features" to="#features" color="white" />
          <Link text="pricing" to="#pricing" color="white" />
          <Link text="contact" to="#contact" color="white" />
      </Stack>
      <SocialWrapper>
        <FacebookIcons/>
      <TwitterIcon/>
      </SocialWrapper>
    </Container>
  </Box>
)

export default Footer

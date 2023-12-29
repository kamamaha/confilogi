import React, { FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import Link from "../common/buttons/Link"
import RedButton from "../common/buttons/RedButtton"
import OutlineButton from "../common/buttons/OutlineButton"
import FacebookIcons from "../common/icons/FacebookIcon"
import TwitterIcon from "../common/icons/TwitterIcon"
import styled from "styled-components"

const SocialWrapper = styled.div`
display: flex;
margin-top: 10vh;
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

type Props = {
  isOpen: boolean
}

const MenuLinks: FC<Props> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      height={{ base: "100vh", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        gap={0}
      >
        <Link text="features" to="#features" isOpen={isOpen} />
        <Link text="pricing" to="#pricing" isOpen={isOpen} />
        <Link text="contact" to="#contact" isOpen={isOpen} isLast />
        {isOpen ? (
          <>
            <OutlineButton text="Login" isCapitalized />
            <SocialWrapper>
              <FacebookIcons />
              <TwitterIcon />
            </SocialWrapper>
          </>
        ) : (
          <RedButton text="login" isCapitalized />
        )}
      </Stack>
    </Box>
  )
}

export default MenuLinks

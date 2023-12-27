import React, { FC, ReactElement, useState } from "react"
import { Flex } from "@chakra-ui/react"
import MenuToggle from "./MenuToggle"
import MenuLinks from "./MenuLinks"
import Logo from "./Logo"

type NavBarContainerProps = {
  children: ReactElement[]
}
const NavBarContainer: FC<NavBarContainerProps> = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="white"
    >
      {children}
    </Flex>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar

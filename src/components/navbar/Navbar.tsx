import React, { FC, ReactElement, useState } from "react"
import { Flex } from "@chakra-ui/react"
import MenuToggle from "./MenuToggle"
import MenuLinks from "./MenuLinks"
import Logo from "./Logo"

type NavBarContainerProps = {
  children: ReactElement[]
  isOpen: boolean
}
const NavBarContainer: FC<NavBarContainerProps> = ({ children, isOpen }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={3}
      p={8}
      position="fixed"
      zIndex={1140}
      bgColor={{ base: isOpen ? "hsl(229, 31%, 21%, 90%)" : "white" }}
    >
      {children}
    </Flex>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  if (isOpen) {
    return (
      <NavBarContainer isOpen={isOpen}>
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    )
  }

  return (
    <NavBarContainer isOpen={isOpen}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar

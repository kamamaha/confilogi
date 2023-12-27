import React, { FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import Link from "../common/buttons/Link"
import RedButton from "../common/buttons/RedButtton"

type Props = {
  isOpen: boolean
}
const MenuLinks: FC<Props> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="#features">
          <Link text="features" />
        </MenuItem>
        <MenuItem to="#pricing">
          <Link text="pricing" />
        </MenuItem>
        <MenuItem to="#contact">
          <Link text="contact" />
        </MenuItem>
        <MenuItem to="#login">
          <RedButton text="login" isCapitalized />
        </MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks

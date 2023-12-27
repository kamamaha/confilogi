import React, { FC } from "react"
import { Button } from "@chakra-ui/react"
type Props = {
  text: string
}

const BlueButton: FC<Props> = ({ text }) => (
  <Button
    variant="solid"
    bgColor="hsl(231, 69%, 60%)"
    py={5}
    px={6}
    boxShadow="0px 8px 11px -4px rgba(210, 213, 237, 1)"
    color="white"
    borderRadius="5px"
    border="2px"
    borderColor="hsl(231, 69%, 60%)"
    fontSize="14px"
    _hover={{
      bg: "#ffffff",
      color: "hsl(231, 69%, 60%)",
      border: "2px",
      borderColor: "hsl(231, 69%, 60%)",
    }}
  >
    {text}
  </Button>
)

export default BlueButton

import React, { FC } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
  text: string
  isCapitalized?: boolean
  withShadow?: boolean
  onClick?: () => void
}

const RedButton: FC<Props> = ({
  text,
  isCapitalized = false,
  withShadow = true,
  onClick,
}) => (
  <Button
    onClick={onClick}
    variant="solid"
    bgColor="hsl(0, 94%, 66%)"
    py={5}
    px={6}
    boxShadow={withShadow ? "0px 8px 11px -4px rgba(210, 213, 237, 1)" : "none"}
    color="white"
    borderRadius="5px"
    fontWeight={500}
    border="2px"
    borderColor="hsl(0, 94%, 66%)"
    fontSize="12px"
    letterSpacing="1.5px"
    textTransform={isCapitalized ? "uppercase" : "none"}
    _hover={{
      bg: "#ffffff",
      color: "hsl(0, 94%, 66%)",
      border: "2px",
      borderColor: "hsl(0, 94%, 66%)",
    }}
  >
    {text}
  </Button>
)

export default RedButton

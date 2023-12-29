import React, { FC } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
  text: string
  isCapitalized?: boolean
  onClick?: () => void
}

const OutlineButton: FC<Props> = ({ text, isCapitalized = false, onClick }) => (
  <Button
    onClick={onClick}
    variant="solid"
    bg="none"
    py={5}
    px={6}
    color="white"
    borderRadius="5px"
    fontWeight={500}
    border="2px"
    borderColor="white"
    fontSize="18px"
    letterSpacing="1.5px"
    textTransform={isCapitalized ? "uppercase" : "none"}
    width="100%"
    marginTop={10}
    _hover={{
      bg: "none",
    }}
  >
    {text}
  </Button>
)

export default OutlineButton

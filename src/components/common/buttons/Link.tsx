import React, { FC } from "react"
import { Button } from "@chakra-ui/react"
type Props = {
  text: string
}

const Link: FC<Props> = ({ text }) => (
  <Button
    variant="ghost"
    py={5}
    px={6}
    color="#000000"
    fontSize="12px"
    fontWeight="400"
    textTransform="uppercase"
    letterSpacing="1.5px"
    _hover={{
      color: "hsl(0, 94%, 66%)",
    }}
  >
    {text}
  </Button>
)

export default Link

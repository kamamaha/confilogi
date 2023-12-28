import React, { FC } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
  text: string
  color?: string
}

const Link: FC<Props> = ({ text, color = "hsl(229, 31%, 21%)" }) => (
  <Button
    variant="ghost"
    py={5}
    px={6}
    color={color}
    fontSize="12px"
    fontWeight={500}
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

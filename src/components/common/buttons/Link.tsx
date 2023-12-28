import React, { FC } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
  text: string
  color?: string
  isOpen?: boolean
  to?: string
  isLast?: boolean
}

const Link: FC<Props> = ({
  text,
  color = "hsl(229, 31%, 21%)",
  isOpen,
  to = "#",
  isLast
}) => {
  const onClick = () => {
    window.location.href = to
  }

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      py={isOpen ? 10 : 5}
      px={6}
      width={isOpen ? "100%" : "auto"}
      color={isOpen ? "white" : color}
      borderTop={isOpen ? "0.5px solid grey" : 'none'}
      borderBottom={isOpen && isLast ? "0.5px solid grey" : 'none'}
      fontSize={isOpen ? "18px" : "12px"}
      borderRadius="none"
      fontWeight={isOpen ? 400 : 500}
      textTransform="uppercase"
      letterSpacing="1.5px"
      _hover={{
        color: "hsl(0, 94%, 66%)",
      }}
      _active={{
        bg: "none",
      }}
    >
      {text}
    </Button>
  )
}

export default Link

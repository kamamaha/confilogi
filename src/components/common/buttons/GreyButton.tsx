import React, { FC } from "react"
import { Button } from "@chakra-ui/react"
type Props = {
  text: string
  onClick?: () => void
}

const GreyButton: FC<Props> = ({ text, onClick }) => (
  <Button
    onClick={onClick}
    variant="solid"
    bgColor="#f7f7face"
    py={5}
    px={6}
    boxShadow="0px 8px 11px -4px rgba(210, 213, 237, 1)"
    color="#666666"
    borderRadius="5px"
    border="2px"
    fontWeight={500}
    borderColor="#f7f7face"
    fontSize="14px"
    _hover={{
      bg: "#ffffff",
      color: "#666666",
      border: "2px",
      borderColor: "#666666",
    }}
  >
    {text}
  </Button>
)

export default GreyButton

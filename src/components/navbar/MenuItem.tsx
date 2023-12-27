import React, { FC, ReactElement } from "react"
import { Text } from "@chakra-ui/react"

type Props = {
  children: string | ReactElement
  to: string
}

const MenuItem: FC<Props> = ({ children, to = "#" }) => {
  const onClick = () => {
    window.location.href = to
  }

  return (
    <Text onClick={onClick} display="block">
      {children}
    </Text>
  )
}

export default MenuItem

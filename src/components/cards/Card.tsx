import React, { FC, ReactElement } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import DotDivider from "../../assets/bg-dots.svg"
import BlueButton from "../common/buttons/BlueButton"

type Props = {
  text: string
  content: string
  imageComponent: ReactElement
  marginTop?: number | {}
}

const Card: FC<Props> = ({ text, content, imageComponent, marginTop }) => (
  <Box
    role={"group"}
    py={6}
    maxW={"280px"}
    w={"full"}
    boxShadow={"0px 8px 11px -4px rgba(210, 213, 237, 1)"}
    rounded={"lg"}
    pos={"relative"}
    h={"fit-content"}
    zIndex={1}
    ml={5}
    mr={5}
    mt={marginTop}
  >
    <Stack align={"center"}>{imageComponent}</Stack>
    <Stack pt={10} align={"center"}>
      <Text as={"h4"} fontSize={"2xl"} fontWeight={500}>
        {text}
      </Text>
      <Text as={"p"} color={"gray.500"} fontSize={"sm"}>
        {content}
      </Text>
    </Stack>
    <Stack align={"center"} mt={10}>
      <DotDivider />
    </Stack>
    <Stack align={"center"} mt={5}>
      <BlueButton text="Add & Install Extension" />
    </Stack>
  </Box>
)

export default Card

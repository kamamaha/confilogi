import React, { FC, ReactElement } from 'react'
import {
    Text,
    Flex,
    Stack,
  } from "@chakra-ui/react"
import BlueButton from './common/buttons/BlueButton'
import styled from 'styled-components'
import { lightBlue } from '../theme'

const BackgroundShape = styled.div`
  background-color: ${lightBlue};
  height: 35vh;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  margin-top: -30vh;
  z-index: -1;
  width: 40vw;
  @media (max-width: 768px) {
    width: 60vw;
    max-height: 150px;
    min-height: 150px;
    margin-top: -400px;
    height: 45vh;
  }
`

const ImageWrapper = styled.div`
  max-width: 800px;
  width: 40vw;
  height: auto;
  @media (max-width: 768px) {
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
  }
  svg {
    width: 100%;
    height: 100%;
    overflow: "visible";
  }
`

type Props = {
    title: string
    content: string
    imageComponent: ReactElement
}

const SingleTab: FC<Props> = ({title, content, imageComponent}) => {
  return (
    <>
    <Stack
      direction={{ base: "column", md: "row" }}
      maxW={"1440px"}
      mx={"auto"}
    >
      <ImageWrapper>
        {imageComponent}
      </ImageWrapper>

      <Flex pl={4} pr={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            as={"h3"}
            fontWeight={500}
            fontSize={{ base: "24px", md: "30px" }}
            lineHeight={{ base: "30px", md: "45px" }}
            align={{ base: "center", md: "left" }}
            mt={{ base: "50px", md: "0" }}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontSize="lg"
            align={{ base: "center", md: "left" }}
          >
            {content}
          </Text>
          <Stack
            direction={{ base: "row", md: "row" }}
            spacing={4}
            mx={{ base: "auto", md: "0" }}
            
          >
            <BlueButton text="More Info" />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    <Flex justify={"start"}>
      <BackgroundShape />
    </Flex>
  </>
  )
}

export default SingleTab
import React, { useEffect, useState, FC, FormEvent, ChangeEvent } from "react"

import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react"


type Props = {
  numberOfUsers?: number
  countdownTime?: number
}

const Newsletter: FC<Props> = ({
  numberOfUsers = 35000,
  countdownTime = 20000,

}) => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  )
  const [error, setError] = useState(false)
  const [joinedNumber, setJoinedNumber] = useState(numberOfUsers)
  let timer: any
  const interval = (numberOfUsers / countdownTime) * 100

  useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (joinedNumber === 0) {
        clearInterval(timer)
        return
      }
      setJoinedNumber((prev) => prev - interval)
    }, 100)
  
    return () => clearInterval(timer)
  }, [joinedNumber])

  return (
    <Flex
      align={"center"}
      justify={"center"}
      py={10}
      bg={useColorModeValue("hsl(231, 69%, 60%)", "hsl(231, 69%, 60%)")}
      mt={150}
    >
      <Container maxW={"xl"} p={6}>
        <Text color={"white"} letterSpacing={"3px"} textTransform={"uppercase"} fontSize={"12px"} align={"center"} mb={{ base: "20px", md: "50px" }}>{joinedNumber}+ already joined</Text>
        <Text
          as={"h3"}
          align={"center"}
          mb={10}
          color="white"
          fontWeight={500}
          fontSize={{ base: "24px", md: "30px" }}
          lineHeight={{ base: "30px", md: "45px" }}
        >
          Stay up-to-date with what we're doing
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            setError(false)
            setState("submitting")

            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true)
                setState("initial")
                return
              }

              setState("success")
            }, 1000)
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.500"}
              height={"44px"}
              _placeholder={{
                color: "gray.300",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Enter your email address"}
              aria-label={"Enter your email address"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button 
      
            variant="solid"
            bgColor="hsl(0, 94%, 66%)"
            py={5}
            px={6}
            color="white"
            borderRadius="5px"
            fontWeight={500}
            border="2px"
            borderColor="hsl(0, 94%, 66%)"
            fontSize="12px"
            letterSpacing="1.5px"
            _hover={{
              bg: "#ffffff",
              color: "hsl(0, 94%, 66%)",
              border: "2px",
              borderColor: "hsl(0, 94%, 66%)",
            }}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? "Send" : "Contact us"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error && "Oh no an error occured! 😢 Please try again later."}
        </Text>
      </Container>
    </Flex>
  )
}

export default Newsletter
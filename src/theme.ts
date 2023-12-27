import { extendTheme } from "@chakra-ui/react"

const darkBlue = "hsl(229, 31%, 21%)"
const gray = "hsl(229, 8%, 60%)"
export const lightBlue = "hsl(231, 69%, 60%)"
export const lightRed = "hsl(0, 94%, 66%)"

const theme = extendTheme({
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
  },
  fontSizes: {

    lg: "18px",
    xl: "18px",
  },
  styles: {
    global: {
      p: {
        color: gray,
      },
      button: {
        color: darkBlue,
      },
      h1: {
        color: darkBlue,
      },
      h2: {
        color: darkBlue,
      },
      h3: {
        color: darkBlue,
      },
    },
  },
})

export default theme

import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"

describe("<App />", () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  })
  it("should render page sections", async () => {
    render(
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    )
    
    const navbar = await screen.findByTestId("nav-bar")
    const hero = await screen.findByTestId("hero")
    const tabs = await screen.findByTestId("tabs")
    const cards = await screen.findByTestId("cards")
    const accordion = await screen.findByTestId("accordion")
    const newsletter = await screen.findByTestId("newsletter")
    const footer = await screen.findByTestId("footer")

    expect(navbar).toBeInTheDocument()
    expect(hero).toBeInTheDocument()
    expect(tabs).toBeInTheDocument()
    expect(cards).toBeInTheDocument()
    expect(accordion).toBeInTheDocument()
    expect(newsletter).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})

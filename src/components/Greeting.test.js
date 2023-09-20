import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting/>)

    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World!")
    expect(helloWorldElement).toBeInTheDocument()
  })

  test("renders good to see you if button not clicked", () => {
    render(<Greeting/>)
    const textElement = screen.getByText("good to see you", {exact: false})
    expect(textElement).toBeInTheDocument()
  })

  test("renders Changed! if button clicked", () => {
    //Arrange
    render(<Greeting/>)
    //Act
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)
    //Assert
    const textElement = screen.getByText("Changed!")
    expect(textElement).toBeInTheDocument()
  })

  test("does not render good to see you if button clicked", () => {
    render(<Greeting/>)
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)
    const textElement = screen.queryByText("good to see you", {exact: false})
    expect(textElement).toBeNull()
  })
})

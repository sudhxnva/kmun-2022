import * as React from "react"
import { ButtonFilledStyles } from "./ButtonFilledStyles"

const ButtonFilled = ({ text, to, as }) => {
  return (
    <ButtonFilledStyles className="btn btn__filled" as={as} to={to}>
      {text}
    </ButtonFilledStyles>
  )
}

export default ButtonFilled

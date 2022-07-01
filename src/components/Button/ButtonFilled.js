import * as React from "react"
import { ButtonFilledStyles } from "./ButtonFilledStyles"

const ButtonFilled = ({ text, to, as, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClick(e)
      }}
      tabIndex={0}
    >
      <ButtonFilledStyles className="btn btn__filled" as={as} to={to}>
        {text}
      </ButtonFilledStyles>
    </div>
  )
}

export default ButtonFilled

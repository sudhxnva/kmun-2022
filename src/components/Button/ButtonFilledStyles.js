import styled from "styled-components"

export const ButtonFilledStyles = styled.div`
  color: #fff;
  background-color: var(--primary);
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  padding: 13px;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-size: var(--p);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &:focus {
    color: var(--background);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--background);

      &::after {
        left: 100%;
      }
    }
  }
`

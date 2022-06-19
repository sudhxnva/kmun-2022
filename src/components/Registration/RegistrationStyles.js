import styled from "styled-components"

export const RegistrationStyles = styled.section`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: 900;
    font-size: 50px;

    @media (max-width: 576px) {
      font-size: 30px;
      padding-top: 15%;
    }

    @media (max-width: 768px) {
      font-size: 40px;
      padding-top: 10%;
    }
  }
`

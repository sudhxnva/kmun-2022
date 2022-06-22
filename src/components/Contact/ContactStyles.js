import styled from "styled-components"

export const ContactStyles = styled.section`
  .container {
    padding-top: 5%;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--primary);
  }

  h2 {
    text-transform: uppercase;
  }

  .bold {
    font-weight: bold;
    color: var(--bodyColor);
  }

  .email {
    padding-bottom: 10px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 2%;
  }

  .contact {
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 10px;
    color: var(--inActive);
  }

  .address {
    p {
      white-space: pre-line;
    }
  }

  .map-embed {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 3rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
    }

    .contact {
      padding-bottom: 10%;
    }
  }
`

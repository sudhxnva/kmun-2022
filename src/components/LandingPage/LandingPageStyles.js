import styled from "styled-components"

export const KMUNIntroStyles = styled.section`
  h1 {
    font-weight: 900;
  }

  .container {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 1050px;
    }
  }

  .desc-image {
    width: 40vw;
    align-self: center;
    justify-self: center;
  }

  .kmun-inner-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: 1fr;

      .desc-image {
        grid-column-start: 1;
        grid-row-start: 1;
        width: 300px;
      }
    }
  }

  .kmun-desc-inner-container {
    width: 90%;

    p {
      padding-bottom: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 100%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 1.1rem;
    }
  }

  .kmun-desc-heading {
    font-size: 5rem;

    span {
      font-size: 10rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 3rem;

      span {
        font-size: 7rem;
      }

      width: 70vw;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 3rem;

      span {
        font-size: 7rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3rem;

      span {
        font-size: 7rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 3.5rem;

      span {
        font-size: 8rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 5rem;

      span {
        font-size: 10rem;
      }
    }
  }
`

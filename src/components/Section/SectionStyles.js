import styled from "styled-components"

export const SectionStyles = styled.section`
  h1 {
    font-weight: 900;
  }
  .sc-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .sc-heading {
    color: var(--inActive);
    text-transform: uppercase;
  }

  .sc-heading-container {
    flex: 1;
  }
  .sc-description {
    flex: 2;
  }

  .sc-description {
    font-size: 1.2rem;
  }

  .sc-heading-container,
  .sc-description {
    align-self: center;
    justify-self: center;

    p {
      white-space: pre-line;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .sc-container {
      flex-direction: column;
    }
    .sc-heading {
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .sc-heading.larger {
      font-size: 4.7rem;
    }

    .sc-description {
      padding-top: 10%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 1.05rem;
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    .sc-container {
      flex-direction: column;
    }
    .sc-heading {
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .sc-heading.larger {
      font-size: 4.7rem;
    }

    .sc-description {
      padding-top: 10%;
      padding-left: 5%;
      padding-right: 5%;
      font-size: 1.05rem;
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .sc-heading {
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .sc-container {
      grid-auto-flow: column;
    }

    .sc-heading-container,
    .sc-description {
      align-self: center;
      justify-self: center;
    }

    .sc-description {
      padding-top: 0;
      padding-left: 40px;
      width: 100%;
    }

    .sc-heading {
      font-size: 4rem;
      line-height: 3rem;
    }
    .sc-heading.larger {
      font-size: 6.7rem;
    }

    .sc-description {
      font-size: 0.95rem;
      text-align: left;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .sc-heading {
      font-size: 5rem;
      line-height: 4rem;
    }
    .sc-heading.larger {
      font-size: 7.8rem;
    }

    .sc-description {
      font-size: 1.1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    .sc-container {
      flex-direction: row;
    }
    .sc-heading {
      font-size: 5rem;
      line-height: 4rem;
    }

    .sc-description {
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    .sc-heading {
      font-size: 5rem;
      line-height: 6rem;
    }

    .sc-heading.larger {
      font-size: 10rem;
    }
  }
`
export const SectionHeadingStyles = styled.section`
  h1 {
    font-weight: 5rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: var(--inActive);
  }
`

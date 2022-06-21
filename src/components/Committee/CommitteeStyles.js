import styled from "styled-components"

export const CommitteesStyles = styled.section`
  h1 {
    font-weight: 900;
    color: var(--primary);
  }

  h2 {
    font-weight: 900;
    text-transform: uppercase;
    color: var(--inActive);
  }

  .comm-card {
    border: 2px solid #ffffff1c;
    border-radius: 40px;
    padding: 15px;
    padding-bottom: 3%;
    margin-bottom: 5%;
  }

  .comm-intro-grid {
    display: grid;
    column-gap: 1rem;
  }

  .comm-img-container {
    background-color: white;
    justify-self: center;
    align-self: center;
  }

  .comm-name {
    font-size: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    align-self: center;
  }

  .comm-desc {
    font-size: 1rem;
    padding-top: 10%;
    padding-bottom: 10%;

    p {
      white-space: pre-line;
    }
  }

  .writeup {
    padding-right: 15px;
  }

  .dais {
    display: grid;
    margin: 0 auto;
  }

  .eb-member {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .eb-img {
    width: 150px;
    margin: 0 auto;
  }

  .eb-text {
    display: flex;
    flex-direction: column;
  }

  .eb-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 18px;

    .container {
      margin-top: 20%;
    }

    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    .comm-intro-grid,
    .dais {
      grid-template-columns: 1fr;
    }
    .eb-member {
      flex-direction: column;
    }
    .eb-text {
      align-items: center;
      margin-bottom: 10%;
    }

    .comm-img-container {
      width: 180px;
      height: 180px;
    }

    .comm-card {
      padding-top: 15%;
    }

    .comm-name {
      font-size: 2rem;
      text-align: center;
      padding-top: 10%;
    }

    .writeup {
      padding-right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 18px;

    .container {
      margin-top: 20%;
    }

    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    .comm-intro-grid,
    .dais {
      grid-template-columns: 1fr;
    }
    .eb-member {
      flex-direction: column;
    }
    .eb-text {
      align-items: center;
      margin-bottom: 10%;
    }

    .comm-img-container {
      width: 180px;
      height: 180px;
    }

    .comm-card {
      padding-top: 15%;
    }

    .comm-name {
      font-size: 2rem;
      text-align: center;
      padding-top: 10%;
    }

    .writeup {
      padding-right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .container {
      margin-top: 10%;
    }

    .eb-member {
      flex-direction: row;
    }

    .comm-img-container {
      width: 250px;
      height: 250px;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    .comm-name {
      font-size: 2.7rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 var(--borderSpacing);
    .container {
      margin-top: 5%;
    }

    .eb-member {
      flex-direction: column;
    }

    .dais {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .container {
      margin-top: 2%;
    }

    h1 {
      font-size: 4rem;
    }

    .comm-name {
      font-size: 3.5rem;
    }

    .comm-desc {
      font-size: 1.1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .comm-desc {
      font-size: 1.3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .comm-intro-grid {
      grid-template-columns: 0.6fr 1.2fr 1fr;
    }

    .comm-name {
      padding-top: 0%;
    }

    .comm-desc {
      font-size: 1rem;
    }

    .comm-card {
      padding-top: 0;
    }

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`

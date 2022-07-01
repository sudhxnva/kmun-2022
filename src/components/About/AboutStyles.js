import styled from "styled-components"

export const AboutStyles = styled.section`
  .secgen-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .tile-section {
    display: grid;
  }

  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tile-name {
    font-size: 1.6rem;
  }

  .tile-title {
    font-weight: 700;
    text-align: center;
    color: var(--primary);
  }

  .secgen-img {
    width: 350px;
  }

  .letter {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 70px;
  }

  .letter-container {
    border: 2px solid #ffffff1c;
    border-radius: 40px;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 5%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .letter-content {
    padding: 20px;
    margin: 0 auto;
    white-space: pre-line;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 4% !important;

    .secgen-section {
      flex-direction: column;
    }

    .tile-section {
      grid-template-columns: 1fr;
    }

    .tile {
      margin-bottom: 50px;
    }

    .tile-img {
      width: 230px;
    }

    .tile-name {
      text-align: center;
    }

    .tile-title {
      font-size: 1.1rem;
    }

    .letter {
      padding-top: 60px;
    }

    .secgen-name {
      font-size: 1.5rem;
    }

    .letter-container {
      margin-top: 10%;
      max-height: 450px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 5% !important;

    .secgen-section {
      flex-direction: column;
    }

    .tile-section {
      grid-template-columns: 1fr;
    }

    .tile {
      margin-bottom: 50px;
    }

    .tile-img {
      width: 250px;
    }

    .tile-name {
      text-align: center;
    }

    .tile-title {
      font-size: 1.1rem;
    }

    .letter {
      padding-top: 60px;
    }

    .secgen-name {
      font-size: 1.5rem;
    }
    .letter-container {
      margin-top: 10%;
      max-height: 500px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .tile-section {
      grid-template-columns: 1fr 1fr;
    }

    .secgen-section {
      flex-direction: row;
    }

    .secgen-info {
      padding-left: 5%;
    }

    .secgen-name {
      font-size: 2.3rem;
    }

    .secgen-title {
      font-size: 1.5rem;
    }

    .letter {
      padding-top: 10px;
    }

    .letter-container {
      margin-top: 5%;
      width: 80%;
      max-height: 400px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 5%;

    .tile-section {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .tile-name {
      font-size: 1.4rem;
    }

    .secgen-name {
      font-size: 2.3rem;
    }

    .tile-img {
      width: 270px;
    }

    .oc-img {
      width: 250px;
    }

    .letter-container {
      margin-top: 0;
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    .tile-img {
      width: 300px;
    }
    .oc-img {
      width: 250px;
    }
  }
`

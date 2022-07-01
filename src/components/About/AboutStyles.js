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

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
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
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
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
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    .tile-img {
      width: 300px;
    }
  }
`

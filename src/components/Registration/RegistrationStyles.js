import styled from "styled-components"

export const RegistrationStyles = styled.section`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  .container {
    width: 80%;
    margin: 0 auto;
  }

  .reg-banner {
    margin-top: 20%;
    margin-bottom: 10%;
  }

  h1 {
    font-weight: 900;
    font-size: 4.5rem;
    text-align: center;
  }

  .highlight {
    color: var(--primary);
  }

  .reg-title {
    text-align: center;
    font-weight: 700;
    font-size: 3.5rem;
    padding-top: 3rem;
  }

  .reg-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 4rem;
    padding-bottom: 5rem;
  }

  .reg-grid-box {
    justify-self: center;
    align-self: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    width: 100%;
  }

  .reg-type {
    font-size: 2.5rem;
    text-align: center;
  }

  .price-info-container {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
  }

  .price-info {
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
    flex: 1;
  }

  .price {
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary);
    padding-bottom: 10px;
  }

  .price-type {
    font-size: 1rem;
  }

  .reg-title {
    color: var(--inActive);
  }

  .reg-form {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .container {
      margin-top: 70%;
      width: 95%;
    }

    h1 {
      font-size: 2rem;
    }

    .reg-title,
    .reg-type {
      font-size: 1.8rem;
    }

    .reg-grid {
      grid-template-columns: 1fr;
    }

    .price-info-container {
      flex-direction: column;
      padding-bottom: 10%;
      padding-top: 0;
    }

    .price-info {
      padding-top: 10%;
    }

    .border-right {
      border: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    .container {
      margin-top: 70%;
      width: 95%;
    }

    h1 {
      font-size: 2.1rem;
    }

    .reg-title,
    .reg-type {
      font-size: 2rem;
    }

    .reg-grid {
      grid-template-columns: 1fr;
    }

    .price-info-container {
      flex-direction: column;
      padding-bottom: 10%;
      padding-top: 0;
    }

    .price-info {
      padding-top: 10%;
    }

    .border-right {
      border: none;
    }

    .reg-form {
      height: 80vh;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      font-size: 3.4rem;
    }

    .reg-title,
    .reg-type {
      font-size: 2.5rem;
    }

    .reg-grid {
      grid-template-columns: 1fr;
    }

    .price-info-container {
      flex-direction: row;
      padding-bottom: 0;
      padding-top: 20px;
    }

    .price-info {
      padding-top: 0;
    }

    .border-right {
      border-right-style: solid;
      border-width: 2px;
      border-color: #fff3;
    }
    .container {
      margin-top: 50%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .container {
      margin-top: 40%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .reg-title,
    .reg-type {
      font-size: 4rem;
    }

    h1 {
      font-size: 4rem;
    }

    .container {
      margin-top: 40%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    .reg-title,
    .reg-type {
      font-size: 3rem;
    }

    .container {
      margin-top: 20%;
    }
    h1 {
      font-size: 4.5rem;
    }

    .reg-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .border-right-lg {
      border-right-style: solid;
      border-width: 2px;
      border-color: #fff3;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    h1 {
      font-size: 5rem;
    }

    .reg-title {
      font-size: 3.7rem;
    }
  }

  @media (min-width: 1800px) {
    .container {
      width: 66.66%;
    }
  }
`

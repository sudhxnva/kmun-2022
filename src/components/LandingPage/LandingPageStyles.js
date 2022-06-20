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

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      p {
        font-size: 1.1rem;
      }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: 3rem;

      span {
        font-size: 7rem;
      }

      width: 70vw;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: 2.5rem;

      span {
        font-size: 5rem;
      }
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
export const SocialCauseStyles = styled.section`
  background-color: var(--background-secondary);

  h1 {
    font-weight: 900;
  }

  .sc-container {
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    max-width: 90%;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 15%;
  }

  .sc-heading {
    color: var(--inActive);
  }

  .sc-description {
    font-size: 1.2rem;
  }

  .sc-heading-container,
  .sc-description {
    align-self: center;
    justify-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .sc-container {
      grid-auto-flow: row;
    }
    .sc-heading {
      font-size: 4.2rem;
      line-height: 2rem;
    }
    .sc-heading.larger {
      font-size: 4.7rem;
    }

    .sc-description {
      padding-top: 10%;
      padding-left: 0;
      font-size: 1.05rem;
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    .sc-container {
      grid-auto-flow: row;
    }
    .sc-heading {
      font-size: 4.2rem;
      line-height: 2rem;
    }
    .sc-heading.larger {
      font-size: 4.7rem;
    }

    .sc-description {
      padding-top: 10%;
      padding-left: 0;
      font-size: 1.05rem;
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .sc-heading {
      font-size: 5rem;
      line-height: 3rem;
    }
    .sc-heading.larger {
      font-size: 5.5rem;
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
      padding-left: 10%;
      width: 100%;
    }

    .sc-heading {
      font-size: 6rem;
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
      font-size: 7rem;
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
    .sc-heading {
      font-size: 8rem;
      line-height: 4rem;
    }
    .sc-heading.larger {
      font-size: 9rem;
    }

    .sc-description {
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    .sc-heading {
      font-size: 9rem;
      line-height: 5rem;
    }

    .sc-heading.larger {
      font-size: 10rem;
    }
  }
`

export const CommitteeStyles = styled.section`
  h1 {
    font-weight: 900;
  }

  .com-text-container {
    display: grid;
    grid-template-columns: 3fr 4fr;
    margin: 0 auto;
  }

  .com-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .com-image-container {
    width: 15vw;
    height: 15vw;
    background-color: var(--bodyColor);
    padding: 10px;
  }

  .com-text {
    align-self: center;
    > h1 {
      font-size: 5rem;
      color: var(--primary);
    }
  }

  .com-10 {
    font-size: 19rem;
    justify-self: end;
    line-height: 17rem;
    color: var(--primary);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .com-10 {
      font-size: 17rem;
      line-height: 15rem;
    }

    .com-text > h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .com-10 {
      font-size: 13rem;
      line-height: 11rem;
    }

    .com-text > h1 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .com-10 {
      font-size: 7rem;
      line-height: 7rem;
    }

    .com-text > h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .com-10 {
      font-size: 6.5rem;
      line-height: 6rem;
    }

    .com-text > h1 {
      font-size: 1.5rem;
    }
  }
`

export const SponsorStyles = styled.section`
  .sponsor-heading {
    font-size: 9rem;
    font-weight: 900;
    color: var(--primary);
    text-align: center;
  }

  .sponsor-heading {
    @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
      font-size: 7rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 6rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      font-size: 1.7rem;
    }
  }

  .tvs-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 5%;
    width: 50vw;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 70%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
      width: 43vw;
    }
  }
`

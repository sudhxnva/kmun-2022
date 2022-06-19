import styled from "styled-components"

export const CountdownDiv = styled.section`
  .container {
    width: 70%;
    line-height: 1rem;
    text-align: center;
  }

  .dates {
    text-align: center;
    margin: 0 auto;
    margin-top: 5%;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      width: 50vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 60vw;
    }

    > span.highlight {
      color: var(--bodyColor);
      font-weight: 700;
    }
  }

  .container {
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
    }

    > h1 {
      font-weight: 900;
    }

    width: 80%;
    line-height: 1rem;
    text-align: center;

    span {
      font-size: 1.3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;

      > h1 {
        font-size: 2.5rem;
      }

      span {
        font-size: 0.8rem;
      }

      > span.text-lg {
        font-size: 1.5rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      > h1 {
        font-size: 3.5rem;
      }

      span {
        font-size: 1rem;
      }

      > span.text-lg {
        font-size: 1.8rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      > h1 {
        font-size: 4.5rem;
      }

      > span.text-lg {
        font-size: 2.5rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      > h1 {
        font-size: 6rem;
      }

      span {
        font-size: 1.1rem;
      }

      > span.text-lg {
        font-size: 3rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      > h1 {
        font-size: 7rem;
      }

      > span.text-lg {
        font-size: 3.5rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
      > h1 {
        font-size: 8rem;
      }

      > span.text-lg {
        font-size: 5rem;
      }
    }
  }

  #countdown {
    width: 250px;
    padding: 10px;
    display: inline-block;
    text-align: center;

    .box {
      padding: 10px;

      > p {
        color: var(--primary);
        font-size: 20px;
        font-weight: 900;
        margin: 0;
      }

      .text {
        font-size: 12px;
        font-weight: 400;
      }
    }

    .col-4:last-child .box {
      border-right-color: transparent;
    }
  }

  .title {
    letter-spacing: 8px;
    color: #c0b1f4;

    > span {
      font-weight: 600;
    }
  }

  .title-container {
    margin-top: 15%;
  }

  .info-container {
    margin-top: 4%;
  }

  .countdown-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
  }

  .col-4 {
    width: 25%;
    float: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    #countdown {
      width: 85vw;
      padding-top: 5%;

      .box p {
        font-size: 3rem;
        line-height: 4rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    #countdown {
      width: 60vw;
      padding-top: 5%;

      .box p {
        font-size: 4rem;
        line-height: 6rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    #countdown {
      .box p {
        font-size: 5rem;
        line-height: 7rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    #countdown {
      .box p {
        font-size: 6rem;
        line-height: 8rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    #countdown {
      width: 65vw;

      .box p {
        font-size: 8rem;
        line-height: 9rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    #countdown {
      width: 70vw;

      .box p {
        font-size: 10rem;
        line-height: 13.5rem;
      }
    }
  }
`

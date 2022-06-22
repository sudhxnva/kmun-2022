import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      display: inline-block;
      font-weight: 900;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      h1 {
        font-size: 3rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      h1 {
        font-size: 3.5rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      h1 {
        font-size: 4rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      h1 {
        font-size: 5rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      max-width: none;

      h1 {
        font-size: 7.5rem;
      }
    }

    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }

    h1,
    .price {
      margin-top: 0;
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }
`

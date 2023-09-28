import styled from "styled-components";

interface SingleGameProps {
  $isTrContainerDisplayed: boolean;
  $index?: number;
  $isTextDisplaying?: boolean;
}

export const ShowcaseSection = styled.section`
  @media (max-width: 576px) {
    padding-top: 5rem;
  }
`;
export const ShowcaseContainer = styled.article`
  @media (max-width: 576px) {
    padding: 3rem  ;
  }
`;

export const SingleGameCatchphrase = styled.div<SingleGameProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  opacity: ${({ $isTrContainerDisplayed }) =>
    $isTrContainerDisplayed ? 1 : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-out;
  transition: opacity 1s forwards, transform 1s forwards;

  @media (max-width: 576px) {
    gap: 2rem;
  }

  p {
    width: 40%;
    position: absolute;
    color: var(--backgroundColor);
    text-align: center;
    font-weight: 700;
    font-size: clamp(1.3rem, 3vw, 2rem);
    font-style: italic;
    text-shadow: 0 0 0.3rem var(--backgroundColor);
    z-index: 2;
    line-height: 1.5;
    transform: ${({ $index }) =>
      $index! % 2 === 0 ? "translateY(-3rem);" : "translateY(3rem);"};
    animation: ${({ $isTextDisplaying }) =>
      $isTextDisplaying ? "textDisplay 1s 0.2s forwards" : null};

    @media (max-width: 576px) {
      width: 70%;
    }
  }
`;

export const TrImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  inset: 0;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0.5rem 1rem var(--backgroundColor);
    backdrop-filter: brightness(70%);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    transform: rotate(90deg) scale(1.8);
  }
`;

export const Gradient = styled.div<SingleGameProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 3;

  background-image: linear-gradient(
    to right,
    var(--backgroundColor) 50%,
    transparent 51%,
    transparent 99%,
    var(--backgroundColor) 100%
  );
  background-size: 200% 100%;
  animation: ${({ $isTrContainerDisplayed, $index }) =>
    $isTrContainerDisplayed
      ? $index! % 2 === 0
        ? "imageGradientToLeft 1s forwards"
        : "imageGradientToRight 1s forwards"
      : "none"};
`;

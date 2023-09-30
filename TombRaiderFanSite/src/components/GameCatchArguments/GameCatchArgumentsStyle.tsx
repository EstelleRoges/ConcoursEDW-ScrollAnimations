import styled from "styled-components";

interface SingleGameProps {
  $isTrContainerDisplayed: boolean;
  $index?: number;
  $isTextDisplaying?: boolean;
}

export const CatchSection = styled.section`
  @media (max-width: 576px) {
    padding-top: 5rem;
  }
`;
export const CatchContainer = styled.article`
  @media (max-width: 576px) {
    padding: 3rem 1rem;
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
  transition: opacity 0.3s ease-out, transform 1s ease-out;

  p {
    width: 40%;
    position: absolute;
    color: var(--backgroundColor);
    text-align: center;
    font-weight: 700;
    font-style: italic;
    font-size: clamp(1.3rem, 3vw, 1.75rem);
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
  flex: 1;
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
    height: 100%;
    display: block;
    object-fit: contain;
    transform-origin: center;
    transform: scale(0.99);

    @media (max-width: 578px) {
      width: 100vh;
      height: 100vw;
      object-fit: cover;
    }
  }

  @media (max-width: 578px) {
    width: 100vh;
    height: 100vw;
    transform: rotate(90deg);
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

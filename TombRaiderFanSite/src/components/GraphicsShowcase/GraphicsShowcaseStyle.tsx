import styled from "styled-components";

// import screenshot_tr1 from "../../assets/images/Tr1Image.jpg";
// import screenshot_tr2 from "../../assets/images/Tr2Image.jpg";
// import screenshot_tr3 from "../../assets/images/Tr3Image.jpg";

interface SingleGameProps {
  $isTrContainerDisplayed: boolean;
  $index?: number;
}

export const ShowcaseSection = styled.section`
  @media (max-width: 576px) {
    width: 100vw;
    min-height: fit-content;
  }
`;
export const ShowcaseContainer = styled.article`
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

export const SingleGameCatchphrase = styled.div<SingleGameProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  opacity: ${({ $isTrContainerDisplayed }) =>
    $isTrContainerDisplayed ? 1 : 0};
  display: flex;
  transition: opacity 0.3s ease-out;

  @media (max-width: 576px) {
    width: 100vw;
    height: auto;
    transform: rotate(90deg);
  }

  p {
    width: 40%;
    position: absolute;
    inset: 3rem 0 0 3rem;
    color: var(--backgroundColor);
    font-weight: 700;
    font-size: clamp(1rem, 3vw, 2rem);
    font-style: italic;
    text-shadow: 0 0 0.3rem var(--backgroundColor);
    z-index: 2;
    line-height: 1.5;

    @media (max-width: 576px) {
      width: 60%;
      inset: 1rem 0 0 2rem;
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
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
  /* @media (max-width: 576px) {
  flex: 1;
} */
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

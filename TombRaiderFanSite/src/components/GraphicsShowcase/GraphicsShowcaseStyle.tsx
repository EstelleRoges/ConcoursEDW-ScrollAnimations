import styled from "styled-components";

interface SingleGameProps {
  $isTr1ContainerDisplayed?: boolean;
  $isTr2ContainerDisplayed?: boolean;
  $isTr3ContainerDisplayed?: boolean;
  $isTrContainerDisplayed?: boolean;
}

export const ShowcaseSection = styled.section``;
export const ShowcaseContainer = styled.article``;

export const SingleGameCatchphrase = styled.div<SingleGameProps>`
  height: 100vh;
  position: relative;
  opacity: ${({ $isTrContainerDisplayed }) =>
    $isTrContainerDisplayed ? 1 : 0};
  transition: opacity 0.3s ease-out;

  p {
    margin: 5rem 3rem 3rem;
    position: absolute;
    color: var(--backgroundColor);
    font-weight: 700;
    font-size: 2rem;
    font-style: italic;
    text-shadow: 0 0 0.3rem var(--backgroundColor);
    z-index: 2;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const TrImage = styled.div`
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0.5rem 1rem var(--backgroundColor);
  }
`;

export const Gradient = styled.div<SingleGameProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  background-image: linear-gradient(
    to right,
    var(--backgroundColor) 50%,
    transparent 51%,
    transparent 99%,
    var(--backgroundColor) 100%
  );
    background-size: 200% 100%;
    animation: ${({ $isTrContainerDisplayed }) =>
      $isTrContainerDisplayed ? "imageGradient 1s forwards" : "none"};
`;

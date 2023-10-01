import styled from "styled-components";

interface PrezProps {
  $isPrezTitleDisplayed?: boolean;
  $isPrezTextDisplayed?: boolean;
}

export const PresentationSection = styled.section`
  margin-top: 0;
  z-index: 2;
  background-image: linear-gradient(
    to right,
    var(--backgroundColor) 49%,
    transparent 50%
  );
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0%;

  @media (max-width: 576px) {
    background-image: linear-gradient(
      to right,
      var(--backgroundColor) 0%,
      var(--backgroundColor) 100%
    );
  }
`;

export const PresentationContainer = styled.article`
  padding: 0;

  &:nth-child(even) div {
    flex-direction: row-reverse;
  }
`;

export const PresentationData = styled.div`
  flex: 1;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 2rem;
  justify-content: stretch;
  justify-items: stretch;
  align-items: stretch;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20rem 1fr;
  }
`;

export const TextPart = styled.div`
  padding: 0 2rem;
  align-self: center;

  @media (max-width: 576px) {
    order: 2;
    height: 100vh;
  }
`;

export const PrezTitle = styled.h2<PrezProps>`
  text-transform: uppercase;
  transition: 0.4s ease-in-out;
  opacity: ${({ $isPrezTitleDisplayed }) => ($isPrezTitleDisplayed ? 1 : 0)};
`;

export const PrezTxt = styled.p<PrezProps>`
  margin: 2.5rem 0;
  span {
    font-family: var(--title-font);
  }
  transition: 0.4s ease-in-out;
  opacity: ${({ $isPrezTextDisplayed }) => ($isPrezTextDisplayed ? 1 : 0)};

  &:nth-child(1) {
    transition-delay: 0;
  }
  &:nth-child(2) {
    transition-delay: 0.3s;
  }
  &:nth-child(3) {
    transition-delay: 0.6s;
  }
`;

export const ImagePart = styled.div<PrezProps>`
  position: relative;
   
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 1rem 2rem var(--backgroundColor);
    
  }

  img {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    order: 1;
    height: 20rem;

    img {
      object-position: 0% 15%;
    }
  }
`;

export const Gradient = styled.div<PrezProps>`
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
  animation: ${({ $isPrezTitleDisplayed }) =>
      $isPrezTitleDisplayed ? "imageGradientToRight 1s 0.15s forwards" : "none"};

        @media (max-width: 578px) {
    animation: ${({ $isPrezTitleDisplayed }) =>
      $isPrezTitleDisplayed ? "imageGradientToRight 1s forwards" : "none"};
  }
`;

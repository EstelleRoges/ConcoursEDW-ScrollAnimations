import styled from "styled-components";

interface PreorderProps {
  $isTitleDisplayed?: boolean;
  $areCoversDisplayed?: boolean;
  $isIconsContainerDisplayed?: boolean;
}

export const PreorderSection = styled.section`
  background-image: linear-gradient(
    transparent 5%,
    var(--primary) 10%,
    var(--primary-lighter) 25%,
    var(--primary-lighter) 75%,
    var(--primary) 90%,
    transparent 95%
  );
`;

export const PreOrderContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--backgroundColor);
`;

export const PreorderTitle = styled.h2<PreorderProps>`
  margin: 1rem 0;
  text-align: center;
  text-shadow: 0 0 0.3rem var(--backgroundColor);
  transition: 0.5s ease-in-out;
  opacity: ${({ $isTitleDisplayed }) => ($isTitleDisplayed ? 1 : 0)};
  transform: ${({ $isTitleDisplayed }) =>
    $isTitleDisplayed
      ? "translateY(0) scale(1)"
      : "translateY(-3rem) scale(1.3)"};
`;

export const CenterContainer = styled.div<PreorderProps>`
  padding: 6rem 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 140px;
    max-height: 180px;
    display: block;
    position: relative;
    bottom: ${({ $areCoversDisplayed }) => ($areCoversDisplayed ? "-5rem" : 0)};
    box-shadow: 0 0 0.5rem var(--primary-darker),
      0 0 0.5rem var(--primary-darker), 0 0 0.5rem var(--primary-darker);
    transform: ${({ $areCoversDisplayed }) =>
      $areCoversDisplayed ? "scale(1)" : "scale(0)"};
    opacity: ${({ $areCoversDisplayed }) => ($areCoversDisplayed ? 1 : 0)};

    transition: transform 0.4s ease-out, opacity 0.75s ease-out,
      scale 0.8s ease-in-out;

    &:nth-child(1) {
      transform: ${({ $areCoversDisplayed }) =>
        $areCoversDisplayed
          ? "translateX(-1rem) translateY(-2rem) rotate(-20deg)"
          : "translateX(0) translateY(0) rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ $areCoversDisplayed }) =>
        $areCoversDisplayed ? "translateY(-7rem)" : "translateY(0)"};
      transition-delay: 0.2s;
    }

    &:nth-child(3) {
      transform: ${({ $areCoversDisplayed }) =>
        $areCoversDisplayed
          ? "translateX(1rem) translateY(-2rem) rotate(20deg)"
          : "translateX(0) translateY(0) rotate(0)"};
      transition-delay: 0.4s;
    }
  }

  @media (max-width: 578px) {
    transform: scale(0.8);
    img {
      &:nth-child(1) {
        transform: ${({ $areCoversDisplayed }) =>
          $areCoversDisplayed
            ? "translateX(3rem) translateY(-10rem) rotate(-5deg)"
            : "translateX(0) translateY(0) rotate(0)"};
      }

      &:nth-child(2) {
        transform: ${({ $areCoversDisplayed }) =>
          $areCoversDisplayed ? "translateY(-4rem)" : "translateY(0)"};
        transition-delay: 0.2s;
      }

      &:nth-child(3) {
        transform: ${({ $areCoversDisplayed }) =>
          $areCoversDisplayed
            ? "translateX(-3rem) translateY(2rem) rotate(5deg)"
            : "translateX(0) translateY(0) rotate(0)"};
        transition-delay: 0.4s;
      }
    }
  }
`;

export const PreOrderIcons = styled.div<PreorderProps>`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 576px) {
    margin-top: 0;
    grid-template-columns: auto auto;
  }

  a {
    margin: 2rem 4rem;
    display: flex;
    justify-content: center;
    flex: 1;
    transition: all 0.5s ease-in-out;
    transform: ${({ $isIconsContainerDisplayed }) =>
      $isIconsContainerDisplayed ? "scale(1)" : "scale(0)"};

    &:first-of-type {
      transform: ${({ $isIconsContainerDisplayed }) =>
        $isIconsContainerDisplayed ? "scale(1.25)" : "scale(0)"};
      &:hover {
        transform: scale(1.5);
      }
    }

    &:nth-child(2) {
      transition-delay: 0.2s;
    }
    &:nth-child(3) {
      transition-delay: 0.4s;
    }
    &:nth-child(4) {
      transition-delay: 0.6s;
    }
    &:hover {
      transform: scale(1.25);
      transition-delay: 0s;
    }

    @media (max-width: 768px) {
      margin: 2rem;
    }
    @media (max-width: 578px) {
      margin: 1.5rem;
      transform: scale(0.9);
      &:first-of-type {
        transform: scale(1);
      }
    }
  }
`;

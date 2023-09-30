import styled from "styled-components";

interface PreorderProps {
  $isIconsContainerDisplayed?: boolean;
  $isTitleDisplayed?: boolean;
}

export const PreOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreorderTitle = styled.h2<PreorderProps>`
  margin: 1rem 0;
  text-align: center;
  transition: 0.5s 0.3s ease-out;
  opacity: ${({ $isTitleDisplayed }) => ($isTitleDisplayed ? 1 : 0)};
  transform: ${({ $isTitleDisplayed }) =>
    $isTitleDisplayed
      ? "translateY(0) scale(1)"
      : "translateY(-3rem) scale(1.3)"};
`;

export const PreOrderIcons = styled.div<PreorderProps>`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 576px) {
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
  }
`;

export const CenterContainer = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

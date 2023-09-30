import styled from "styled-components";

interface ContentProps {
  $isElementDisplayed?: boolean;
}

export const ContentTitle = styled.h2<ContentProps>`
  margin-bottom: 2rem;
  opacity: ${({ $isElementDisplayed }) => ($isElementDisplayed ? 1 : 0)};
  transform: ${({ $isElementDisplayed }) =>
    $isElementDisplayed ? "translateX(0)" : "translateX(-2rem)"};
  transition: 0.4s ease-out;
`;

export const ContentList = styled.ul`
  margin: 0 0 6rem 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 0.5rem;
  list-style: none;

  @media (max-width: 578px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentListItem = styled.li<ContentProps>`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.7rem;
  background-color: var(--primary-darker);
  text-align: center;
  font-family: var(--title-font);
  box-shadow: 0 0 0.5rem var(--primary), 0 0 0.25rem var(--primary),
    0 0 0.25rem var(--primary);
  opacity: ${({ $isElementDisplayed }) => ($isElementDisplayed ? 1 : 0)};
  transition: 0.4s ease-out;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.7rem;
    box-shadow: inset 0 0 0.5rem 1rem var(--primary);
  }

  &:nth-child(1) {
    transform: ${({ $isElementDisplayed }) =>
      $isElementDisplayed ? "translateY(2rem)" : "translateY(0)"};
    transition-delay: 0s;
  }

  &:nth-child(2) {
    transform: ${({ $isElementDisplayed }) =>
      $isElementDisplayed ? "translateY(4rem)" : "translateY(-2rem)"};
    transition-delay: 0.15s;
  }

  &:nth-child(3) {
    transform: ${({ $isElementDisplayed }) =>
      $isElementDisplayed ? "translateY(6rem)" : "translateY(-4rem)"};
    transition-delay: 0.3s;
  }

  @media (max-width: 578px) {
    height: 460px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 0.3rem var(--primary));
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(transparent 55%, var(--primary) 70%);
  border-radius: 0 0 0.7rem 0.7rem;

  p {
    margin: 1rem;
    color: var(--backgroundColor);
    text-shadow: 0 0 0.2rem var(--backgroundColor);

    &::after {
      content: "";
      width: fit-content;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: inset 0 -1rem 0.5rem 1rem var(--primary);
    }
  }

  span {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (min-width: 578px) and (max-width: 900px) {
    background-image: linear-gradient(transparent 40%, var(--primary) 55%);
  }

  @media (max-width: 578px) {
    background-image: linear-gradient(transparent 65%, var(--primary) 75%);
  }
`;

export const ExtraData = styled.div`
  margin-top: 5rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const ExtraDataInfo = styled.li<ContentProps>`
  margin: 4rem 0;
  font-size: 1.25rem;
  transition: 0.4s 0.45s ease-out;
  opacity: ${({ $isElementDisplayed }) => ($isElementDisplayed ? 1 : 0)};
  transform: ${({ $isElementDisplayed }) =>
    $isElementDisplayed ? "scale(1)" : "scale(0)"};

  @media (max-width: 578px) {
    text-align: center;
  }
`;

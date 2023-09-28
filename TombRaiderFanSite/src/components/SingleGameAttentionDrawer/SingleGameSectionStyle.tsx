import styled from "styled-components";

interface ContentProps {
  $isElementDisplayed?: boolean;
}

export const ContentArticle = styled.article`
  h2 {
    font-size: clamp(1.75rem, 4vw, 3rem);
  }
`;

export const ContentList = styled.ul`
  margin: 0 0 6rem 0;
  padding: 0;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  gap: 0.5rem;
`;

export const ContentListItem = styled.li<ContentProps>`
  padding: 1rem;
  max-width: 290px;
  height: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.7rem;
  background-color: var(--primary-darker);
  text-align: center;
  font-family: var(--title-font);
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
      $isElementDisplayed ? "translateY(2rem)" : "translateY(-2rem)"};
    transition-delay: 0s;
  }
  &:nth-child(2) {
    transform: ${({ $isElementDisplayed }) =>
      $isElementDisplayed ? "translateY(4rem)" : "translateY(-4rem)"};
    transition-delay: 0.15s;
  }

  &:nth-child(3) {
    transform: ${({ $isElementDisplayed }) =>
      $isElementDisplayed ? "translateY(6rem)" : "translateY(-6rem)"};
    transition-delay: 0.3s;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;

  img {
    width: 280px;
    max-height: 330px;
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
  background-image: linear-gradient(transparent 65%, var(--primary) 75%);
  border-radius: 0 0 0.7rem 0.7rem;

  p {
    margin: 1rem;
    font-size: clamp(1rem, 3vw, 1.35rem);
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
    white-space: nowrap;
    letter-spacing: 1px;
  }
`;

import styled from "styled-components";

interface PreorderProps {
  $isTextDisplayed?: boolean;
}

export const PreOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreorderTitle = styled.h2<PreorderProps>`
  margin: 1rem 0;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  transition: 0.5s ease-out;
  opacity: ${({ $isTextDisplayed }) => ($isTextDisplayed ? 1 : 0)};
  transform: ${({ $isTextDisplayed }) =>
    $isTextDisplayed ? "translateY(0) scale(1)" : "translateY(-3rem) scale(1.3)"};
`;

export const PreOrderIcons = styled.div`
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

    &:nth-child(1),
    &:nth-child(4) {
      transform: translateY(-5rem);
    }

    @media (max-width: 768px) {
      margin: 2rem;
    }

    @media (max-width: 576px) {
      &:nth-child(1),
      &:nth-child(4) {
        transform: translateY(0);
      }
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

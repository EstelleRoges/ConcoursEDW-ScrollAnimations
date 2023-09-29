import styled from "styled-components";

export const PreOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreOrderIcons = styled.div`
  margin-top: 2rem;
  display: flex;

  a {
    margin: 2rem 4rem;
    display: block;

    &:nth-child(1),
    &:nth-child(4) {
      transform: translateY(-5rem);
    }
  }
`;

export const CenterContainer = styled.div``;

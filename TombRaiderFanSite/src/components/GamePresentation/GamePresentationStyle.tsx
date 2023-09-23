import styled from "styled-components";

export const PresentationSection = styled.section`
  margin-top: 0;
  z-index: 2;
`;

export const PresentationContainer = styled.article`
  h2 {
    font-size: 2.45rem;
  }

  &:nth-child(even) div {
    flex-direction: row-reverse;
  }
`;

export const PresentationData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 4rem 0;
    width: 50%;
  }
  img {
    display: block;
    max-width: 50%;
    height: auto;
  }
`;

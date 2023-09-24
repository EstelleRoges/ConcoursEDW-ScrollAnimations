import styled from "styled-components";

export const ShowcaseContainer = styled.article`
  height: 100vh;
  video {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    z-index: 0;
  }
`;

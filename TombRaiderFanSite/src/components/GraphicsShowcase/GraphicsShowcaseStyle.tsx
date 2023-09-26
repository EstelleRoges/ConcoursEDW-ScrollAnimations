import styled from "styled-components";

export const ShowcaseSection = styled.section``;
export const ShowcaseContainer = styled.article``;

export const SingleGameCatchphrase = styled.div`
  height: 100vh;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      transparent 30%,
      var(--backgroundColor) 100%
    );
    background-size: 200% 100%;
    animation: imageGradient 1s;
  }

  p {
    margin: 5rem 3rem 3rem;
    position: absolute;
    color: var(--backgroundColor);
    font-weight: 700;
    font-size: 2rem;
    font-style: italic;
    text-shadow: 0 0 0.3rem var(--backgroundColor);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

import styled from "styled-components";

export const HeroContainer = styled.section`
z-index: 2;
  background-image: linear-gradient(
    to bottom,
    var(--primary-darker) 85%,
    transparent 100%
  );

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    inset: 0;
    z-index: 0;
    filter: brightness(65%);
  }

  &::after {
    content: "";
    min-height: 100vh;
    display: block;
  }
`;

export const VideoShadow = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    transparent 90%,
    var(--primary-darker) 100%
  );
`;

export const HeroData = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  mix-blend-mode: normal;

  h1 {
    margin: 2rem auto;
    text-transform: uppercase;
    color: var(--backgroundColor);
    font-size: clamp(3rem, 8vw, 7rem);
    text-align: center;
    text-shadow: 0 0 1rem var(--secondary);
    position: sticky;
    z-index: 2;
  }
`;

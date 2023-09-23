import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  box-shadow: 0 0 5rem var(--backgroundColor);

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
    z-index: 1;
  }
`;

export const HeroTitle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  backdrop-filter: brightness(65%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h1 {
    margin: 6rem 2rem;
    text-transform: uppercase;
    color: var(--backgroundColor);
    font-size: clamp(3rem, 8vw, 8rem);
    text-align: center;
    text-shadow: 0 0 1rem var(--secondary);
  }
`;

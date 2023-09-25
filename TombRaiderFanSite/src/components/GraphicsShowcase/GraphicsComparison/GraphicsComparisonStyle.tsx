import styled from "styled-components";

interface GraphicsProps {
  $isActive?: boolean;
}

export const ShowcaseContainer = styled.article`
  height: 300vh;
  position: relative;

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

export const GraphicsText = styled.h2<GraphicsProps>`
  color: var(--backgroundColor);
  font-size: clamp(2rem, 5vw, 4rem);
  text-align: center;
  text-shadow: 0 0 1rem var(--secondary);
  position: relative;
  top: 50%;
  opacity: 0;
  filter: blur(3px);
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;

  ${({ $isActive }) => $isActive && "opacity: 1;transform: translateX(0); filter: blur(0); position: fixed"}
`;

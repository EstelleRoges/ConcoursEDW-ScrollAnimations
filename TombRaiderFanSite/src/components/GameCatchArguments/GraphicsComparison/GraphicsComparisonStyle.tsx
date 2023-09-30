import styled from "styled-components";

interface GraphicsProps {
  $isDisplaying?: string;
}

export const ShowcaseContainer = styled.div`
  width: 100%;
  height: 250vh;
  position: relative;
    z-index: -1;

  video {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  }
`;

export const GraphicsText = styled.h2<GraphicsProps>`
  color: var(--backgroundColor);
  text-align: center;
  text-shadow: 0 0 0.5rem var(--secondary);
  position: fixed;
  top: 40%;
  opacity: 0;
  filter: blur(5px);
  transform: translateX(25%);
  transition: all 0.2s ease-in-out;

  ${({ $isDisplaying }) =>
    $isDisplaying === "display"
      ? "animation: byeBoobsTextDisplay 0.7s forwards;"
      : $isDisplaying === "disappear"
      ? "animation: byeBoobsTextDisappearance 1s forwards;"
      : ""};
`;

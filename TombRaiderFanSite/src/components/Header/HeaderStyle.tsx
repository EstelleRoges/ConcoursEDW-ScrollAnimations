import styled from "styled-components";

interface NavModeProps {
  $isMobile?: boolean;
  $isMobileNavVisible?: boolean;
}

export const HeaderWrapper = styled.header<NavModeProps>`
  width: 100%;
  padding: 1.25rem 2rem;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    var(--backgroundColor) 85%,
    transparent 100%
  );
  z-index: 5;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    outline: transparent;
    background-color: var(--tertiary);
    color: var(--backgroundColor);
    font-size: 1rem;
    font-family: var(--title-font);
    box-shadow: 0 0 0.1rem var(--tertiary);
    cursor: pointer;
    transition: box-shadow 0.4s ease, transform 0.5s;
    order: 2;

    &:hover {
      box-shadow: 0 2px 0.3rem var(--tertiary);
      transform: translateY(-4px);
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.a<NavModeProps>`
  padding: 0;
  flex: ${(props: NavModeProps) => (props.$isMobile ? 1 : 0)};

  img {
    margin: ${(props: NavModeProps) => (props.$isMobile ? 0 : "auto")};
    display: block;
    width: 5.5rem;
    position: relative;
    z-index: 3;
  }
`;

export const Navigation = styled.nav<NavModeProps>`
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    width: ${(props: NavModeProps) =>
      props.$isMobileNavVisible ? "100vw" : "auto"};
    height: ${(props: NavModeProps) =>
      props.$isMobileNavVisible ? "100vh" : "auto"};
    list-style-type: none;
    display: ${(props: NavModeProps) =>
      props.$isMobile ? (props.$isMobileNavVisible ? "flex" : "none") : "flex"};
    flex-direction: ${(props: NavModeProps) =>
      props.$isMobile ? "column" : "row"};
    position: ${(props: NavModeProps) =>
      props.$isMobileNavVisible ? "absolute" : "static"};
    top: -1.25rem;
    right: -2rem;
    background-color: ${(props: NavModeProps) =>
      props.$isMobile ? `var(--secondary-lighter)` : "transparent"};
    z-index: 2;

    @media (max-width: 768px) {
      padding-top: 5rem;
    }

    li {
      padding: 0 2rem;

      @media (max-width: 768px) {
        padding: 1rem;
        text-align: right;
      }
    }
  }
`;

export const Passeport = styled.img<NavModeProps>`
  cursor: pointer;
  position: relative;
  z-index: 4;
  opacity: ${(props: NavModeProps) => (props.$isMobileNavVisible ? 0 : 1)};
`;

export const Close = styled.img`
  cursor: pointer;
  position: relative;
  top: -2.25rem;
  right: -1.25rem;
  z-index: 4;
`;

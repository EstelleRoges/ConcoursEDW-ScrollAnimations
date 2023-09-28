import styled from "styled-components";

interface NavModeProps {
  $isMobile?: boolean;
  $isMobileNavVisible?: boolean;
}

export const HeaderWrapper = styled.header<NavModeProps>`
  width: 100%;
  padding: 0.75rem 2rem 1.25rem;
  position: fixed;
  z-index: 4;
  /* background-image: linear-gradient(
    to bottom,
    var(--backgroundColor) 85%,
    transparent 100%
  ); */

  @media (max-width: 768px) {
       padding: 1.5rem;
    }

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

export const Logo = styled.div`
  display: block;
  flex: 1;
  z-index: 5;

  img {
    margin: 0;
    display: block;
    width: 5.5rem;
    cursor: crosshair;
    filter: drop-shadow(0 0 3px var(--primary-darker));

    @media (max-width: 768px) {
      width: 4.5rem;
    }
  }
`;

export const LogoContainer = styled.div<NavModeProps>`
  padding: 0;
  flex: ${(props: NavModeProps) => (props.$isMobile ? 1 : 0)};
  z-index: 5;
`;

export const Navigation = styled.nav<NavModeProps>`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ul {
    width: 100%;
    flex: 1;
    margin: 0rem;
    padding: 7rem 0 0 0;
    list-style-type: none;
    background-color: var(--primary-darker);

    li {
      padding: 3rem;
      text-align: end;
    }
  }
`;

export const Passeport = styled.img<NavModeProps>`
  cursor: pointer;
  position: relative;
  z-index: 4;
  opacity: ${(props: NavModeProps) => (props.$isMobileNavVisible ? 0 : 1)};
  filter: drop-shadow(2px 2px 5px var(--backgroundColor));

  @media (max-width: 768px) {
    width: 26px;
  }
`;

export const Close = styled.img`
  margin: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
`;

import { useState, useEffect } from "react";
import * as HeaderStyle from "./HeaderStyle";
import Logo from "../../assets/images/TrLogoTitleOnly.png";
import PassportIcon from "../../assets/svg/trPassportIcon.svg";
import CloseIcon from "../../assets/svg/closeIcon.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);

  const watchScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", watchScreenSize);
    return () => {
      window.removeEventListener("resize", watchScreenSize);
    };
  }, [isMobile]);

  return (
    <HeaderStyle.HeaderWrapper $isMobile={isMobile}>
      <HeaderStyle.HeaderContainer>
        <HeaderStyle.LogoContainer href="/" $isMobile={isMobile}>
          <img src={Logo} alt="Logo" />
        </HeaderStyle.LogoContainer>
        <HeaderStyle.Navigation
          $isMobile={isMobile}
          $isMobileNavVisible={isMobileNavVisible}
        >
          {isMobile ? (
            <>
              <HeaderStyle.Passeport
              $isMobileNavVisible={isMobileNavVisible}
                src={PassportIcon}
                alt="Menu"
                onClick={() => setIsMobileNavVisible((prevValue) => !prevValue)}
              />
              <ul>
                <li>
                  <a href="/">Le jeu</a>
                </li>
                <li>
                  <a href="/">Graphismes</a>
                </li>
                <li>
                  <a href="/">Contenu</a>
                </li>
                {isMobileNavVisible && (
                <li>
                  <button>Commander</button>
                </li>
              )}
              </ul>
            </>
          ) : (
            <ul>
              <li>
                <a href="/">Le jeu</a>
              </li>
              <li>
                <a href="/">Graphismes</a>
              </li>
              <li>
                <a href="/">Contenu</a>
              </li>
            </ul>
          )}
          {isMobile && isMobileNavVisible && (
            <HeaderStyle.Close
              src={CloseIcon}
              alt="Menu"
              onClick={() => setIsMobileNavVisible((prevValue) => !prevValue)}
            />
          )}
        </HeaderStyle.Navigation>
        {!isMobile && <button>Commander</button>}
      </HeaderStyle.HeaderContainer>
    </HeaderStyle.HeaderWrapper>
  );
};

export default Header;

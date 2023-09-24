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
    <>
      <HeaderStyle.HeaderWrapper $isMobile={isMobile}>
        <HeaderStyle.HeaderContainer>
          <HeaderStyle.Logo>
            <img src={Logo} alt="Logo" />
          </HeaderStyle.Logo>
          <HeaderStyle.Passeport
            $isMobileNavVisible={isMobileNavVisible}
            src={PassportIcon}
            alt="Menu"
            onClick={() => setIsMobileNavVisible((prevValue) => !prevValue)}
          />
          {isMobileNavVisible && (
            <HeaderStyle.Navigation
              $isMobile={isMobile}
              $isMobileNavVisible={isMobileNavVisible}
            >
              {isMobileNavVisible && (
                <HeaderStyle.Close
                  src={CloseIcon}
                  alt="Menu"
                  onClick={() =>
                    setIsMobileNavVisible((prevValue) => !prevValue)
                  }
                />
              )}
              <ul>
                <li
                  onClick={() =>
                    setIsMobileNavVisible((prevValue) => !prevValue)
                  }
                >
                  <a href="#aboutGame">Le jeu</a>
                </li>
                <li
                  onClick={() =>
                    setIsMobileNavVisible((prevValue) => !prevValue)
                  }
                >
                  <a href="#graphicsShowcase">Graphismes</a>
                </li>
                <li
                  onClick={() =>
                    setIsMobileNavVisible((prevValue) => !prevValue)
                  }
                >
                  <a href="#singleGames">Contenu</a>
                </li>

                <li
                  onClick={() =>
                    setIsMobileNavVisible((prevValue) => !prevValue)
                  }
                >
                  <button>Commander</button>
                </li>
              </ul>
            </HeaderStyle.Navigation>
          )}
        </HeaderStyle.HeaderContainer>
      </HeaderStyle.HeaderWrapper>
    </>
  );
};

export default Header;

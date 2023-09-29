import { useState, useEffect, useRef } from "react";

import useObserver from "../../utils/hooks/useObserver";

import * as PreOrderStyle from "./PreOrderStyle";

import PSIcon from "../../assets/svg/psIcon.svg";
import SwitchIcon from "../../assets/svg/switchIcon.svg";
import XBoxIcon from "../../assets/svg/xboxIcon.svg";
import SteamIcon from "../../assets/svg/steamIcon.svg";
import curved from "../../assets/svg/preOrderCurvedText.svg";

import TrImage from "../../assets/images/Tr3Render_6.png";

const PreOrderSection = () => {
  const { observeAndDisplay } = useObserver();

  const preorderText = useRef<HTMLHeadingElement | null>(null);

  const [isPreorderTextDisplayed, setIsPreorderTextDisplayed] = useState<boolean>(false);

  useEffect(() => {
    observeAndDisplay(preorderText, setIsPreorderTextDisplayed);
    console.log(isPreorderTextDisplayed);
  }, [isPreorderTextDisplayed, observeAndDisplay]);

  return (
    <section id="preorder">
      <article>
        <PreOrderStyle.PreOrderContainer>
          <PreOrderStyle.PreorderTitle ref={preorderText} $isTextDisplayed={isPreorderTextDisplayed}>
            Pré-commandez!
          </PreOrderStyle.PreorderTitle>
          <PreOrderStyle.CenterContainer>
            <img src={TrImage} alt="TrImage" />
          </PreOrderStyle.CenterContainer>
          <PreOrderStyle.PreOrderIcons>
            <a
              href="https://store.playstation.com/fr-fr/concept/10008568"
              target="_blank"
            >
              <img src={PSIcon} alt="Icon" />
            </a>
            <a
              href="https://www.nintendo.fr/Jeux/Jeux-a-telecharger-sur-Nintendo-Switch/Tomb-Raider-I-III-Remastered-2441188.html"
              target="_blank"
            >
              <img src={SwitchIcon} alt="Icon" />
            </a>
            <a
              href="https://www.xbox.com/fr-FR/games/store/tomb-raider-i-iii-remastered-starring-lara-croft/9N25D4T3L8JX"
              target="_blank"
            >
              <img src={XBoxIcon} alt="Icon" />
            </a>
            <a
              href="https://store.steampowered.com/app/2478970/Tomb_Raider_IIII_Remastered/"
              target="_blank"
            >
              <img src={SteamIcon} alt="Icon" />
            </a>
          </PreOrderStyle.PreOrderIcons>
        </PreOrderStyle.PreOrderContainer>
      </article>
    </section>
  );
};

export default PreOrderSection;

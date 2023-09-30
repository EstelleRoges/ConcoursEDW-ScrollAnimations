import { useState, useEffect, useRef } from "react";

import useObserver from "../../utils/hooks/useObserver";

import * as PreOrderStyle from "./PreOrderStyle";

import Tr1Jacket from "../../assets/images/tr1cover.jpg";
import Tr2Jacket from "../../assets/images/tr2cover.jpg";
import Tr3Jacket from "../../assets/images/tr3cover.png";

import PSIcon from "../../assets/svg/psIcon.svg";
import SwitchIcon from "../../assets/svg/switchIcon.svg";
import XBoxIcon from "../../assets/svg/xboxIcon.svg";
import SteamIcon from "../../assets/svg/steamIcon.svg";

const PreOrderSection = () => {
  const { observeAndDisplay } = useObserver();

  const preorderTitle = useRef<HTMLHeadingElement | null>(null);
  const coverContainer = useRef<HTMLDivElement | null>(null);
  const preorderIconsContainer = useRef<HTMLDivElement | null>(null);

  const [isPreorderTitleDisplayed, setIsPreorderTitleDisplayed] =
    useState<boolean>(false);
  const [areCoversDisplayed, setAreCoversDisplayed] =
    useState<boolean>(false);
  const [
    isPreorderIconsContainerDisplayed,
    setIsPreorderIconsContainerDisplayed,
  ] = useState<boolean>(false);

  useEffect(() => {
    observeAndDisplay(
      preorderIconsContainer,
      setIsPreorderIconsContainerDisplayed
    );
    observeAndDisplay(
      coverContainer,
      setAreCoversDisplayed
    );
    observeAndDisplay(preorderTitle, setIsPreorderTitleDisplayed);
  }, [observeAndDisplay]);

  return (
    <section id="preorder">
      <PreOrderStyle.PreOrderContainer>
        <PreOrderStyle.PreorderTitle
          ref={preorderTitle}
          $isTitleDisplayed={isPreorderTitleDisplayed}
        >
          Pré-commandez!
        </PreOrderStyle.PreorderTitle>
        <PreOrderStyle.CenterContainer ref={coverContainer} $areCoversDisplayed={areCoversDisplayed}>
          <img src={Tr1Jacket} alt="TrJacket" />

          <img src={Tr2Jacket} alt="TrJacket" />

          <img src={Tr3Jacket} alt="TrJacket" />
        </PreOrderStyle.CenterContainer>
        <PreOrderStyle.PreOrderIcons
          ref={preorderIconsContainer}
          $isIconsContainerDisplayed={isPreorderIconsContainerDisplayed}
        >
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
    </section>
  );
};

export default PreOrderSection;

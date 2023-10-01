import { useState, useEffect, useRef } from "react";

import useObserver from "../../utils/hooks/useObserver";

import * as PrezStyle from "./GamePresentationStyle";

import PrezLara from "../../assets/images/TrPrezImage.png";

const GamePresentation = () => {
  const prezTitle = useRef<HTMLHeadingElement | null>(null);
  const prezText1 = useRef<HTMLDivElement | null>(null);
  const prezText2 = useRef<HTMLDivElement | null>(null);
  const prezText3 = useRef<HTMLDivElement | null>(null);

  const { observeAndDisplay } = useObserver();

  const [isPrezTitleDisplayed, setIsPrezTitleDisplayed] =
    useState<boolean>(false);
  const [isPrezTextDisplayed, setIsPrezTextDisplayed] =
    useState<boolean>(false);

  useEffect(() => {
    observeAndDisplay(prezTitle, setIsPrezTitleDisplayed);
    observeAndDisplay(prezText1, setIsPrezTextDisplayed);
    observeAndDisplay(prezText2, setIsPrezTextDisplayed);
    observeAndDisplay(prezText3, setIsPrezTextDisplayed);
  }, [observeAndDisplay]);

  return (
    <PrezStyle.PresentationSection id="aboutGame">
      <PrezStyle.PresentationContainer>
        <PrezStyle.PresentationData>
          <PrezStyle.TextPart>
            <PrezStyle.PrezTitle
              ref={prezTitle}
              $isPrezTitleDisplayed={isPrezTitleDisplayed}
            >
              La belle archéologue revient
            </PrezStyle.PrezTitle>
            <div>
              <PrezStyle.PrezTxt
                ref={prezText1}
                $isPrezTextDisplayed={isPrezTextDisplayed}
              >
                Après des années d'espoir, le rêve des retro-gamers va se
                réaliser: <br />{" "}
                <span>
                  Lara Croft revient dans une version remasterisée et haute en
                  couleurs!
                </span>
              </PrezStyle.PrezTxt>
              <PrezStyle.PrezTxt
                ref={prezText2}
                $isPrezTextDisplayed={isPrezTextDisplayed}
              >
                (Re)vivez l'une des aventures les plus mythiques de l'histoire du jeu vidéo, avec des graphismes plus détaillés mais gardant le charme cubique d'antan!
              </PrezStyle.PrezTxt>
              <PrezStyle.PrezTxt
                ref={prezText3}
                $isPrezTextDisplayed={isPrezTextDisplayed}
              >
                La collection sera disponible le <span>14 février 2024</span>,
                pour les 54 ans de notre chère héroïne!
              </PrezStyle.PrezTxt>
            </div>
          </PrezStyle.TextPart>
          <PrezStyle.ImagePart>
            <PrezStyle.Gradient $isPrezTitleDisplayed={isPrezTitleDisplayed} />
            <img src={PrezLara} alt="Lara_img" />
          </PrezStyle.ImagePart>
        </PrezStyle.PresentationData>
      </PrezStyle.PresentationContainer>
    </PrezStyle.PresentationSection>
  );
};

export default GamePresentation;

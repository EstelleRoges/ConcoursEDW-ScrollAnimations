import { useState, useEffect, useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import * as ContentStyle from "./ContentInfoStyle";

import tr1Img from "../../assets/images/Tr1Render.png";
import tr2Img from "../../assets/images/Tr2Render_4.png";
import tr3Img from "../../assets/images/Tr3Render_5.png";

const ContentInfo = () => {
  const contentTitle = useRef<HTMLHeadingElement | null>(null);

  const tr1ContentContainer = useRef<HTMLLIElement | null>(null);
  const tr2ContentContainer = useRef<HTMLLIElement | null>(null);
  const tr3ContentContainer = useRef<HTMLLIElement | null>(null);

  const extraData1 = useRef<HTMLLIElement | null>(null);
  const extraData2 = useRef<HTMLLIElement | null>(null);
  const extraData3 = useRef<HTMLLIElement | null>(null);

  const [isContentTitleDisplayed, setIsContentTitleDisplayed] = useState(false);
  const [isTr1CardDisplayed, setIsTr1CardDisplayed] = useState<boolean>(false);
  const [isTr2CardDisplayed, setIsTr2CardDisplayed] = useState<boolean>(false);
  const [isTr3CardDisplayed, setIsTr3CardDisplayed] = useState<boolean>(false);
  const [isExtraData1Displayed, setIsExtraData1Displayed] =
    useState<boolean>(false);
  const [isExtraData2Displayed, setIsExtraData2Displayed] =
    useState<boolean>(false);
  const [isExtraData3Displayed, setIsExtraData3Displayed] =
    useState<boolean>(false);

  const { observeAndDisplay } = useObserver();

  useEffect(() => {
    observeAndDisplay(contentTitle, setIsContentTitleDisplayed);
    observeAndDisplay(tr1ContentContainer, setIsTr1CardDisplayed);
    observeAndDisplay(tr2ContentContainer, setIsTr2CardDisplayed);
    observeAndDisplay(tr3ContentContainer, setIsTr3CardDisplayed);
    observeAndDisplay(extraData1, setIsExtraData1Displayed);
    observeAndDisplay(extraData2, setIsExtraData2Displayed);
    observeAndDisplay(extraData3, setIsExtraData3Displayed);
  }, [observeAndDisplay]);

  return (
    <section id="singleGames">
      <article>
        <ContentStyle.ContentTitle
          ref={contentTitle}
          $isElementDisplayed={isContentTitleDisplayed}
        >
          Contenu de la collection
        </ContentStyle.ContentTitle>
        <ContentStyle.ContentList>
          <ContentStyle.ContentListItem
            ref={tr1ContentContainer}
            $isElementDisplayed={isTr1CardDisplayed}
          >
            <ContentStyle.ImageContainer>
              <img src={tr1Img} alt="ContentImg" />
            </ContentStyle.ImageContainer>
            <ContentStyle.TextContainer>
              <p>
                <span>Tomb Raider I</span>
                <br />+<br /> Unfinished Business
              </p>
            </ContentStyle.TextContainer>
          </ContentStyle.ContentListItem>
          <ContentStyle.ContentListItem
            ref={tr2ContentContainer}
            $isElementDisplayed={isTr2CardDisplayed}
          >
            <ContentStyle.ImageContainer>
              <img src={tr2Img} alt="ContentImg" />
            </ContentStyle.ImageContainer>
            <ContentStyle.TextContainer>
              <p>
                <span>Tomb Raider II</span>
                <br />+<br /> The Golden Mask
              </p>
            </ContentStyle.TextContainer>
          </ContentStyle.ContentListItem>
          <ContentStyle.ContentListItem
            ref={tr3ContentContainer}
            $isElementDisplayed={isTr3CardDisplayed}
          >
            <ContentStyle.ImageContainer>
              <img src={tr3Img} alt="ContentImg" />
            </ContentStyle.ImageContainer>
            <ContentStyle.TextContainer>
              <p>
                <span>Tomb Raider III</span>
                <br />+<br /> The Lost Artifact
              </p>
            </ContentStyle.TextContainer>
          </ContentStyle.ContentListItem>
        </ContentStyle.ContentList>
        <ContentStyle.ExtraData>
          <h2>Et aussi...</h2>
          <ul>
            <ContentStyle.ExtraDataInfo
              ref={extraData1}
              $isElementDisplayed={isExtraData1Displayed}
            >
              En plus de la trilogie originale, vous pourrez vivre les aventures
              inédites des extensions, autrefois disponibles que sur PC!
            </ContentStyle.ExtraDataInfo>
            <ContentStyle.ExtraDataInfo
              ref={extraData2}
              $isElementDisplayed={isExtraData2Displayed}
            >
              Si vous voulez replonger dans la nostalgie jusqu'au bout, vous
              pourrez changer les graphismes depuis les options à tout moment!
            </ContentStyle.ExtraDataInfo>
            <ContentStyle.ExtraDataInfo ref={extraData3}
              $isElementDisplayed={isExtraData3Displayed}>Afin que cette belle colelction soit accessible à tous, elle sera disponible sur toutes les plateformes! Selon certaines conditions, une réduction pourrait vous être offerte!</ContentStyle.ExtraDataInfo>
          </ul>
        </ContentStyle.ExtraData>
      </article>
    </section>
  );
};

export default ContentInfo;

import { useState, useEffect, useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import * as SingleStyle from "./SingleGameSectionStyle";

import tr1Img from "../../assets/images/Tr1Render.png";
import tr2Img from "../../assets/images/Tr2Render_4.png";
import tr3Img from "../../assets/images/Tr3Render_5.png";

const SingleGameSections = () => {
  const tr1ContentContainer = useRef<HTMLLIElement | null>(null);
  const tr2ContentContainer = useRef<HTMLLIElement | null>(null);
  const tr3ContentContainer = useRef<HTMLLIElement | null>(null);

  const extraData1 = useRef<HTMLLIElement | null>(null);
  const extraData2 = useRef<HTMLLIElement | null>(null);

  const [isTr1CardDisplayed, setIsTr1CardDisplayed] = useState<boolean>(false);
  const [isTr2CardDisplayed, setIsTr2CardDisplayed] = useState<boolean>(false);
  const [isTr3CardDisplayed, setIsTr3CardDisplayed] = useState<boolean>(false);
  const [isExtraData1Displayed, setIsExtraData1Displayed] =
    useState<boolean>(false);
  const [isExtraData2Displayed, setIsExtraData2Displayed] =
    useState<boolean>(false);

  const { observeAndDisplay } = useObserver();

  useEffect(() => {
    observeAndDisplay(tr1ContentContainer, setIsTr1CardDisplayed);
    observeAndDisplay(tr2ContentContainer, setIsTr2CardDisplayed);
    observeAndDisplay(tr3ContentContainer, setIsTr3CardDisplayed);
    observeAndDisplay(extraData1, setIsExtraData1Displayed);
    observeAndDisplay(extraData2, setIsExtraData2Displayed);
  }, [observeAndDisplay]);

  return (
    <section id="singleGames">
      <SingleStyle.ContentArticle>
        <h2>Contenu de la collection</h2>
        <SingleStyle.ContentList>
          <SingleStyle.ContentListItem
            ref={tr1ContentContainer}
            $isElementDisplayed={isTr1CardDisplayed}
          >
            <SingleStyle.ImageContainer>
              <img src={tr1Img} alt="ContentImg" />
            </SingleStyle.ImageContainer>
            <SingleStyle.TextContainer>
              <p>
                <span>Tomb Raider I</span>
                <br />+<br /> Unfinished Business
              </p>
            </SingleStyle.TextContainer>
          </SingleStyle.ContentListItem>
          <SingleStyle.ContentListItem
            ref={tr2ContentContainer}
            $isElementDisplayed={isTr2CardDisplayed}
          >
            <SingleStyle.ImageContainer>
              <img src={tr2Img} alt="ContentImg" />
            </SingleStyle.ImageContainer>
            <SingleStyle.TextContainer>
              <p>
                <span>Tomb Raider II</span>
                <br />+<br /> The Golden Mask
              </p>
            </SingleStyle.TextContainer>
          </SingleStyle.ContentListItem>
          <SingleStyle.ContentListItem
            ref={tr3ContentContainer}
            $isElementDisplayed={isTr3CardDisplayed}
          >
            <SingleStyle.ImageContainer>
              <img src={tr3Img} alt="ContentImg" />
            </SingleStyle.ImageContainer>
            <SingleStyle.TextContainer>
              <p>
                <span>Tomb Raider III</span>
                <br />+<br /> The Lost Artifact
              </p>
            </SingleStyle.TextContainer>
          </SingleStyle.ContentListItem>
        </SingleStyle.ContentList>
        <SingleStyle.ExtraData>
          <h2>Et aussi...</h2>
          <ul>
            <SingleStyle.ExtraDataInfo
              ref={extraData1}
              $isElementDisplayed={isExtraData1Displayed}
            >
              En plus de la trilogie originale, vous pourrez vivre des aventures
              inédites avec leurs extensions, autrefois disponibles que sur PC!
            </SingleStyle.ExtraDataInfo>
            <SingleStyle.ExtraDataInfo
              ref={extraData2}
              $isElementDisplayed={isExtraData2Displayed}
            >
              Si vous voulez replonger dans la nostalgie jusqu'au bout, vous
              pourrez changer les graphismes depuis les options à tout moment!
            </SingleStyle.ExtraDataInfo>
            <li></li>
          </ul>
        </SingleStyle.ExtraData>
      </SingleStyle.ContentArticle>
    </section>
  );
};

export default SingleGameSections;

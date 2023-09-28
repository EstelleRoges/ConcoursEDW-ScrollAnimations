import { useState, useEffect, useRef } from "react";
import * as SingleStyle from "./SingleGameSectionStyle";

import tr1Img from "../../assets/images/Tr1Render.png";
import tr2Img from "../../assets/images/Tr2Render_4.png";
import tr3Img from "../../assets/images/Tr3Render_5.png";

const SingleGameSections = () => {
  const contentContainer = useRef<HTMLUListElement | null>(null);
  const card = useRef<HTMLLIElement | null>(null);

  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  useEffect(() => {
    const triggerAtReach = () => {
      if (contentContainer.current && card.current) {
        const triggerPoint =
          contentContainer.current.getBoundingClientRect().top +
          contentContainer.current.getBoundingClientRect().height / 1.5;
        if (window.innerHeight > triggerPoint) {
          setIsDisplayed(true);
        } else {
          setIsDisplayed(false);
        }
      }
    };
    window.addEventListener("scroll", triggerAtReach);

    return () => {
      window.removeEventListener("scroll", triggerAtReach);
    };
  }, [isDisplayed]);

  return (
    <section id="singleGames">
      <SingleStyle.ContentArticle ref={contentContainer}>
        <h2>Contenu du remaster</h2>
        <SingleStyle.ContentList>
          <SingleStyle.ContentListItem
            ref={card}
            $isElementDisplayed={isDisplayed}
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
          <SingleStyle.ContentListItem $isElementDisplayed={isDisplayed}>
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
          <SingleStyle.ContentListItem $isElementDisplayed={isDisplayed}>
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
        <div>
          <ul>
            <li>En plus de la trilogie originale, vous pourrez jouer à leur extensions! Du jamais vu sur les consoles auparavant!</li>
            <li>Si vous voulez replonger dans la nostalgie jusqu'au bout,
            vous pourrez changer les graphismes depuis les options à tout
            moment!</li>
            <li></li>
          </ul>
        </div>
      </SingleStyle.ContentArticle>
    </section>
  );
};

export default SingleGameSections;

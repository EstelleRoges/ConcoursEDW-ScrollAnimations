import { useState, useEffect, useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import { GraphicsComparison } from "../ComponentsIndex";

import * as CatchStyle from "./GameCatchArgumentsStyle";

import screenshot_tr1 from "../../assets/images/Tr1Image.webp";
import screenshot_tr2 from "../../assets/images/Tr2Image.webp";
import screenshot_tr3 from "../../assets/images/Tr3Image.webp";

const GameCatchArguments = () => {
  const tr1Container = useRef<HTMLDivElement | null>(null);
  const tr2Container = useRef<HTMLDivElement | null>(null);
  const tr3Container = useRef<HTMLDivElement | null>(null);

  const [isTr1ContainerDisplayed, setIsTr1ContainerDisplayed] = useState<boolean>(false);
  const [isTr2ContainerDisplayed, setIsTr2ContainerDisplayed] = useState<boolean>(false);
  const [isTr3ContainerDisplayed, setIsTr3ContainerDisplayed] = useState<boolean>(false);

  const [isTr1TextDisplaying, setIsTr1TextDisplaying] = useState<boolean>(false);
  const [isTr2TextDisplaying, setIsTr2TextDisplaying] = useState<boolean>(false);
  const [isTr3TextDisplaying, setIsTr3TextDisplaying] = useState<boolean>(false);

const {observeAndDisplay} = useObserver();

  useEffect(() => {
    observeAndDisplay(
      tr1Container,
      setIsTr1ContainerDisplayed,
      setIsTr1TextDisplaying
    );
    observeAndDisplay(
      tr2Container,
      setIsTr2ContainerDisplayed,
      setIsTr2TextDisplaying
    );
    observeAndDisplay(
      tr3Container,
      setIsTr3ContainerDisplayed,
      setIsTr3TextDisplaying
    );
  }, [observeAndDisplay]);

  return (
    <div id="GameCatchArguments">
      <GraphicsComparison />
      <CatchStyle.CatchSection>
        <CatchStyle.CatchContainer>
          <CatchStyle.SingleGameCatchphrase
            ref={tr1Container}
            $isTrContainerDisplayed={isTr1ContainerDisplayed}
            $isTextDisplaying={isTr1TextDisplaying}
            $index={1}
          >
            <p>
              Partez en quête du Scion, artefact puissant au savoir millénaire
            </p>
            <CatchStyle.TrImage>
              <CatchStyle.Gradient
                $isTrContainerDisplayed={isTr1ContainerDisplayed}
                $index={1}
              />
              <img src={screenshot_tr1} alt="newGraphicsScreenshots_1" />
            </CatchStyle.TrImage>
          </CatchStyle.SingleGameCatchphrase>
          <CatchStyle.SingleGameCatchphrase
            ref={tr2Container}
            $isTrContainerDisplayed={isTr2ContainerDisplayed}
            $isTextDisplaying={isTr2TextDisplaying}
            $index={2}
          >
            <p>
              Retrouvez la dague de Xian avant qu'elle ne tombe entre de
              mauvaises mains
            </p>
            <CatchStyle.TrImage>
              <CatchStyle.Gradient
                $isTrContainerDisplayed={isTr2ContainerDisplayed}
                $index={2}
              />
              <img src={screenshot_tr2} alt="newGraphicsScreenshots_2" />
            </CatchStyle.TrImage>
          </CatchStyle.SingleGameCatchphrase>
          <CatchStyle.SingleGameCatchphrase
            ref={tr3Container}
            $isTrContainerDisplayed={isTr3ContainerDisplayed}
            $isTextDisplaying={isTr3TextDisplaying}
            $index={3}
          >
            <p>
              Parcourez le monde à la recherche de mystérieux artefacts et
              perçez leurs secrets
            </p>
            <CatchStyle.TrImage>
              <CatchStyle.Gradient
                $isTrContainerDisplayed={isTr3ContainerDisplayed}
                $index={3}
              />
              <img src={screenshot_tr3} alt="newGraphicsScreenshots_3" />
            </CatchStyle.TrImage>
          </CatchStyle.SingleGameCatchphrase>
        </CatchStyle.CatchContainer>
      </CatchStyle.CatchSection>
    </div>
  );
};

export default GameCatchArguments;

import { RefObject, useState, useEffect, useRef, SetStateAction } from "react";
import { GraphicsComparison } from "../ComponentsIndex";
import * as GraphicsShowcaseStyle from "./GraphicsShowcaseStyle";

import screenshot_tr1 from "../../assets/images/Tr1Image.jpg";
import screenshot_tr2 from "../../assets/images/Tr2Image.jpg";
import screenshot_tr3 from "../../assets/images/Tr3Image.jpg";

const GraphicsShowcase = () => {
  const tr1Container = useRef<HTMLDivElement | null>(null);
  const tr2Container = useRef<HTMLDivElement | null>(null);
  const tr3Container = useRef<HTMLDivElement | null>(null);

  const [isTr1ContainerDisplayed, setIsTr1ContainerDisplayed] = useState(false);
  const [isTr2ContainerDisplayed, setIsTr2ContainerDisplayed] = useState(false);
  const [isTr3ContainerDisplayed, setIsTr3ContainerDisplayed] = useState(false);
  const [isTrContainerDisplayed, setIsTrContainerDisplayed] = useState(false);

  console.log(isTrContainerDisplayed);
  const observeAndDisplay = (
    containerToObserve: RefObject<HTMLDivElement | null>,
    setState: React.Dispatch<React.SetStateAction<S>>
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (containerToObserve.current && entries[0].isIntersecting) {
          const elementToDisplay = entries[0].target as HTMLDivElement;
          setState(true);
          elementToDisplay.style.animation = "imageGradient";
          observer.unobserve(elementToDisplay);
        }
      },
      {
        root: null,
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    containerToObserve && observer.observe(containerToObserve.current);
    setState(false);

    return () => {
      if (containerToObserve) {
        observer.unobserve(containerToObserve.current);
      }
    };
  };

  useEffect(() => {
    observeAndDisplay(tr1Container, setIsTrContainerDisplayed);
    observeAndDisplay(tr2Container, setIsTrContainerDisplayed);
    observeAndDisplay(tr3Container, setIsTrContainerDisplayed);
  }, []);

  return (
    <div id="graphicsShowcase">
      <GraphicsComparison />
      <GraphicsShowcaseStyle.ShowcaseSection>
        <GraphicsShowcaseStyle.ShowcaseContainer>
          <GraphicsShowcaseStyle.SingleGameCatchphrase
            ref={tr1Container}
            $isTrContainerDisplayed={isTrContainerDisplayed}
          >
            <p>
              Partez à la recherche du Scion, artefact puissant au savoir
              millénaire
            </p>
            <GraphicsShowcaseStyle.TrImage>
              <GraphicsShowcaseStyle.Gradient
                $isTrContainerDisplayed={isTrContainerDisplayed}
              />
              <img src={screenshot_tr1} alt="newGraphicsScreenshots_1" />
            </GraphicsShowcaseStyle.TrImage>
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
          <GraphicsShowcaseStyle.SingleGameCatchphrase ref={tr2Container}>
            <p>
              Retrouvez la la dague de Xian avant qu'elle ne tombe entre de
              mauvaise mains
            </p>
            <GraphicsShowcaseStyle.TrImage>
              <img src={screenshot_tr2} alt="newGraphicsScreenshots_2" />
            </GraphicsShowcaseStyle.TrImage>
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
          <GraphicsShowcaseStyle.SingleGameCatchphrase ref={tr3Container}>
            <p>
              Parcourez le monde à la recherche de mystérieux artefacts et
              perçez leurs secrets
            </p>
            <GraphicsShowcaseStyle.TrImage>
              <img src={screenshot_tr3} alt="newGraphicsScreenshots_3" />
            </GraphicsShowcaseStyle.TrImage>
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
        </GraphicsShowcaseStyle.ShowcaseContainer>
      </GraphicsShowcaseStyle.ShowcaseSection>
    </div>
  );
};

export default GraphicsShowcase;

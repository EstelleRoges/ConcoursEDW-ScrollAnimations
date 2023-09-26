import { useState, useEffect, useRef } from "react";
import * as GraphicsComparisonStyle from "./GraphicsComparisonStyle";
import GraphicsComparisonVideo from "../../../assets/videos/GraphicsChange.mp4";

const GraphicsComparison = () => {
  const [isDisplaying, setIsDisplaying] = useState("");

  const graphicsContainer = useRef<HTMLDivElement | null>(null);
  const graphicsText = useRef<HTMLHeadingElement | null>(null);

  const getGraphicsContainerData = () => {
    const graphicsContainerRef = graphicsContainer.current;
    const graphicsTextRef = graphicsText.current;

    if (graphicsContainerRef && graphicsTextRef) {
      if (graphicsContainerRef.getBoundingClientRect().top <= 0) {
        const startingPoint = Math.abs(
          graphicsContainerRef.getBoundingClientRect().top
        );
        const endPoint = graphicsContainerRef.getBoundingClientRect().height;

        const oneThird = endPoint / 3;
        const twoThird = (endPoint * 2) / 3;

        startingPoint >= oneThird || startingPoint < twoThird
          ? setIsDisplaying("display")
          : setIsDisplaying("disappear");

          startingPoint >= twoThird
          ? setIsDisplaying("disappear")
          : setIsDisplaying("display");
      }
    }
  };

  useEffect(() => {
    addEventListener("scroll", getGraphicsContainerData);
    return () => {
      removeEventListener("scroll", getGraphicsContainerData);
    };
  }, []);

  return (
    <GraphicsComparisonStyle.ShowcaseContainer ref={graphicsContainer}>
      <video autoPlay muted loop>
        <source src={GraphicsComparisonVideo} type="video/mp4" />
      </video>
      <GraphicsComparisonStyle.GraphicsText
        ref={graphicsText}
        $isDisplaying={isDisplaying}
      >
        Adieu, poitrine triangulaire
      </GraphicsComparisonStyle.GraphicsText>
    </GraphicsComparisonStyle.ShowcaseContainer>
  );
};

export default GraphicsComparison;

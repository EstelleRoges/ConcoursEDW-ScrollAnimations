import { useState, useEffect, useRef } from "react";
import * as GraphicsComparisonStyle from "./GraphicsComparisonStyle";
import GraphicsComparisonVideo from "../../../assets/videos/GraphicsChange.mp4";

const GraphicsComparison = () => {
  const [isActive, setIsActive] = useState(false);

  const graphicsContainer = useRef<HTMLDivElement | null>(null);
  const graphicsText = useRef<HTMLHeadingElement | null>(null);

  const getGraphicsContainerData = () => {
    const graphicsContainerRef = graphicsContainer.current;
    const graphicsTextRef = graphicsText.current;

    if (graphicsContainerRef && graphicsTextRef) {
      const startingPoint = Math.abs(
        graphicsContainerRef.getBoundingClientRect().top
      );
      // const triggerPoint =
      //   graphicsContainerRef?.getBoundingClientRect().height / 2;
      console.log(
        `StartingPoint: ${startingPoint}\nText position: ${
          graphicsText.current?.getBoundingClientRect().top
        }`
      );
      if (startingPoint > graphicsTextRef.getBoundingClientRect().top) {
        setIsActive(!isActive)
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
      <GraphicsComparisonStyle.GraphicsText ref={graphicsText} $isActive={isActive}>
        Adieu, poitrine triangulaire
      </GraphicsComparisonStyle.GraphicsText>
    </GraphicsComparisonStyle.ShowcaseContainer>
  );
};

export default GraphicsComparison;

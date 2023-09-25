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
      const startingPoint = Math.abs(
        graphicsContainerRef.getBoundingClientRect().top
      );
      // const triggerPoint =
      //   graphicsContainerRef?.getBoundingClientRect().height / 2;
      console.log(
        `StartingPoint: ${startingPoint}\nText position: ${
          graphicsTextRef.getBoundingClientRect().top
        }\nContainer height: ${
          graphicsContainer.current?.getBoundingClientRect().height
        }`
      );

      if (startingPoint > graphicsTextRef.getBoundingClientRect().top - 300) {
        setIsDisplaying("display");
      } 

      if (
        startingPoint >
        graphicsContainerRef.getBoundingClientRect().height - 800
      ) {
         setIsDisplaying("disappear");
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

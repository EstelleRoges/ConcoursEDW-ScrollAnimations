import * as GraphicsComparisonStyle from "./GraphicsComparisonStyle";
import GraphicsComparisonVideo from "../../../assets/videos/GraphicsChange.mp4";

const GraphicsComparison = () => {
  return (
    <GraphicsComparisonStyle.ShowcaseContainer>
        <video autoPlay loop>
          <source src={GraphicsComparisonVideo} type="video/mp4" />
        </video>
    </GraphicsComparisonStyle.ShowcaseContainer>
  );
};

export default GraphicsComparison;

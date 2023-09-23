import { GraphicsComparison } from "../ComponentsIndex";
import * as GraphicsShowcaseStyle from "./GraphicsShowcaseStyle";

const GraphicsShowcase = () => {
  return (
    <>
    <GraphicsComparison />
    <GraphicsShowcaseStyle.ShowcaseSection id="graphicsShowcase">
      <GraphicsShowcaseStyle.ShowcaseContainer>
        <GraphicsShowcaseStyle.ShowcaseData>
          Other data
        </GraphicsShowcaseStyle.ShowcaseData>
      </GraphicsShowcaseStyle.ShowcaseContainer>
    </GraphicsShowcaseStyle.ShowcaseSection>
    </>
  );
};

export default GraphicsShowcase;

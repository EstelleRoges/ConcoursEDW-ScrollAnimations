import { GraphicsComparison } from "../ComponentsIndex";
import * as GraphicsShowcaseStyle from "./GraphicsShowcaseStyle";

import screenshot_tr1 from "../../assets/images/Tr1Image.jpg";
import screenshot_tr2 from "../../assets/images/Tr2Image.jpg";
import screenshot_tr3 from "../../assets/images/Tr3Image.jpg";

const GraphicsShowcase = () => {
  return (
    <div id="graphicsShowcase">
      <GraphicsComparison />
      <GraphicsShowcaseStyle.ShowcaseSection>
        <GraphicsShowcaseStyle.ShowcaseContainer>
          <GraphicsShowcaseStyle.SingleGameCatchphrase>
            <p>Partez à la recherche du Scion, artefact puissant au savoir millénaire</p>
            <img src={screenshot_tr1} alt="newGraphicsScreenshots_1" />
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
          <GraphicsShowcaseStyle.SingleGameCatchphrase>
            <p>Retrouvez la la dague de Xian avant qu'elle ne tombe entre de mauvaise mains</p>
            <img src={screenshot_tr2} alt="newGraphicsScreenshots_2" />
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
          <GraphicsShowcaseStyle.SingleGameCatchphrase>
            <p>Parcourez le monde à la recherche de mystérieux artefacts et perçez leurs secrets</p>
            <img src={screenshot_tr3} alt="newGraphicsScreenshots_3" />
          </GraphicsShowcaseStyle.SingleGameCatchphrase>
        </GraphicsShowcaseStyle.ShowcaseContainer>
      </GraphicsShowcaseStyle.ShowcaseSection>
    </div>
  );
};

export default GraphicsShowcase;

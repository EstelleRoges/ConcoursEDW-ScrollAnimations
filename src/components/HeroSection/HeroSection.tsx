import * as HeroStyle from "./HeroStyle";
import Trailer from "../../assets/videos/TRTrailer.mp4";

const HeroSection = () => {
  return (
    <HeroStyle.HeroContainer id="HeroVideo">
      <video autoPlay loop muted>
        <source src={Trailer} type="video/mp4" />
      </video>
    <HeroStyle.VideoShadow></HeroStyle.VideoShadow>
      <HeroStyle.HeroData>
        <h1>La légende est de retour...</h1>
      </HeroStyle.HeroData>
    </HeroStyle.HeroContainer>
  );
};

export default HeroSection;

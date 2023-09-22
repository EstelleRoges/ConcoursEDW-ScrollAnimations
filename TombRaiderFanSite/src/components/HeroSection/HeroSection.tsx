import * as HeroStyle from "./HeroStyle";

const HeroSection = () => {
  return (
    <HeroStyle.HeroContainer id="HeroVideo">
      <HeroStyle.HeroVideo autoPlay loop muted>
        <source
          src="../../assets/videos/TR_remastered_trailer_ready.mp4"
          type="video/mp4"
        />
      </HeroStyle.HeroVideo>
    </HeroStyle.HeroContainer>
  );
};

export default HeroSection;

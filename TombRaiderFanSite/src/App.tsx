import {
  HeroSection,
  GamePresentation,
  GraphicsShowcase,
  SingleGameSections,
} from "./components/ComponentsIndex";
import styled from "styled-components";

function App() {
  return (
    <LayoutMain>
      <HeroSection />
      <GamePresentation />
      <GraphicsShowcase />
      <SingleGameSections />
    </LayoutMain>
  );
}

export default App;

const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
`;

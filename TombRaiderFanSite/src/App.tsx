import {
  Header,
  HeroSection,
  GamePresentation,
  GraphicsShowcase,
  SingleGameSections,
  Footer,
} from "./components/ComponentsIndex";
import styled from "styled-components";

function App() {
  return (
    <LayoutMain>
      <Header />
      <HeroSection />
      <GamePresentation />
      <GraphicsShowcase />
      <SingleGameSections />
      <Footer />
    </LayoutMain>
  );
}

export default App;

const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
`;

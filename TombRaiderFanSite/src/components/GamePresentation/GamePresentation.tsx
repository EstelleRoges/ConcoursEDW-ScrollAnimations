import * as GamePresentationStyle from "./GamePresentationStyle";
import PrezLara_1 from "../../assets/images/LaraRender_lateralPose.png";
import PrezLara_2 from "../../assets/images/Tr2Render_2.png";
import PrezLara_3 from "../../assets/images/Tr3Render_5.png";

const GamePresentation = () => {
  return (
    <GamePresentationStyle.PresentationSection id="aboutGame">
      <GamePresentationStyle.PresentationContainer>
        <h2>Replongez dans votre nostalgie</h2>
        <GamePresentationStyle.PresentationData>
          <p>
            Après des années de réclamations, le rêve des retro-gamers va se
            réaliser: <br /> Lara Croft revient dans une version remasterisée et
            haute en couleurs!
          </p>
          <img src={PrezLara_1} alt="Lara_img" />
        </GamePresentationStyle.PresentationData>
      </GamePresentationStyle.PresentationContainer>
      <GamePresentationStyle.PresentationContainer>
        <h2>Réincarnez la légende</h2>
        <GamePresentationStyle.PresentationData>
          <p>
            Le design de la belle archéologue ressemble maintenant à celui des
            beaux renders de l'époque. D'un côté, elle n'a pas changé!
          </p>
          <img src={PrezLara_2} alt="Lara_img" />
        </GamePresentationStyle.PresentationData>
      </GamePresentationStyle.PresentationContainer>
      <GamePresentationStyle.PresentationContainer>
        <h2>Prenez-en plein les yeux</h2>
        <GamePresentationStyle.PresentationData>
          <p>
            Le jeu bénéficiera d'un lifting tout en gardant le charme cubique
            d'antan. Vous ne serez pas dépaysés!
          </p>
          <img src={PrezLara_3} alt="Lara_img" />
        </GamePresentationStyle.PresentationData>
      </GamePresentationStyle.PresentationContainer>
    </GamePresentationStyle.PresentationSection>
  );
};

export default GamePresentation;
